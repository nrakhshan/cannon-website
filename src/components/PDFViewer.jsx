"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Dynamically load Document and Page — this prevents SSR from running PDF.js
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
);

const PDFViewer = ({ issues, issue = 0, className = "" }) => {
  const [pdfjs, setPdfjs] = useState(null);

  useEffect(() => {
    // Load pdfjs after the component mounts (browser only)
    import("react-pdf").then((mod) => {
      const pdfjsInstance = mod.pdfjs;

      pdfjsInstance.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      setPdfjs(pdfjsInstance);
    });
  }, []);

  // Don't render Document until pdfjs is configured
  if (!pdfjs) return null;

  return (
    <div>
      <DesktopPDFViewer issues={issues} issue={issue} className={className} />
    </div>
  );
};

const DesktopPDFViewer = ({ issues, issue = 0, className = "" }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const doublePage = issues[issue]?.doublepage || false;

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const gapPx = 16;
  const pagesToShow = containerWidth <= 600 || (doublePage && pageNumber != 1 && pageNumber != numPages) ? 1 : 2;
  const pageRenderWidth = Math.max(200, Math.floor((containerWidth - gapPx * (pagesToShow - 1)) / pagesToShow));

  const pageIncrement = containerWidth < 600 || doublePage || pageNumber === 0 ? 1 : 2;


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handlePageLeft = () => {
    if (pageNumber === 2 && pageIncrement === 2) {
      setPageNumber(1);
    }
    else if (pageNumber % 2 == 1 && containerWidth > 600 && !doublePage && pageNumber > 1) {
      setPageNumber(pageNumber - pageIncrement + 1);
    }
    else if (pageNumber > 1) {
      setPageNumber(pageNumber - pageIncrement);
    }
  };

  const handlePageRight = () => {
    if (pageNumber % 2 == 1 && containerWidth > 600 && !doublePage) {
      setPageNumber(pageNumber + pageIncrement - 1);
    }
    else if (pageNumber + 1 < numPages) {
      setPageNumber(pageNumber + pageIncrement);
    }
    else if (pageNumber + 1 === numPages && pageIncrement === 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePageJump = (pageToJump) => {
    if (pageToJump > 0 && pageToJump <= numPages) {
      setPageNumber(pageToJump)
    }
  }

  return (
    <div ref={containerRef} className={`mt-20 relative w-[90%] mx-auto ${className}`}>
      <Document
        className='bg-secondary rounded-lg flex justify-center'
        file={issues[issue].file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {pageNumber > 0 && <Page pageNumber={pageNumber} width={pageRenderWidth} className="m-0 p-0 my-2" renderMode="canvas" />}
        {pageNumber + 1 < numPages && !doublePage && pageNumber != 1 && (containerWidth > 600) && <Page pageNumber={pageNumber + 1} width={pageRenderWidth} className="m-0 p-0 my-2" renderMode="canvas" />}
      </Document>

      <div className="absolute inset-0 pointer-events-none z-20">
        <div
          role="button"
          tabIndex={0}
          aria-label="Previous page area"
          onClick={handlePageLeft}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handlePageLeft(); } }}
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-auto z-10"
          style={{ background: 'transparent' }}
        />
        <div
          role="button"
          tabIndex={0}
          aria-label="Next page area"
          onClick={handlePageRight}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handlePageRight(); } }}
          className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-auto z-10"
          style={{ background: 'transparent' }}
        />

        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto">
            <button
              onClick={handlePageLeft}
              className="bg-invert rounded-md opacity-50 w-10 h-10 flex items-center justify-center p-0"
              aria-label="previous page"
            >
              <img src="/assets/chevronleft.svg" alt="arrow left" className="w-5 h-5 pl-1 m-auto" draggable={false} />
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 pointer-events-auto">
            <div className="bg-invert rounded-md px-3 py-1 text-sm shadow-md">
              Page <input
                className="inline bg-secondary rounded-md px-2 py-0.5 ml-2 w-8"
                value={pageNumber}
                onChange={(e) => handlePageJump(Number(e.target.value))}
              />
              of {numPages}
            </div>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto">
            <button
              onClick={handlePageRight}
              className="bg-invert rounded-md opacity-50 w-10 h-10 flex items-center justify-center p-0"
              aria-label="next page"
            >
              <img src="/assets/chevronright.svg" alt="arrow right" className="w-4 h-4 m-auto" draggable={false} />
            </button>
          </div>
        </div>
      </div>
      {doublePage && containerWidth <= 600 && (
        <div className="absolute top-5 left-2 bg-invert text-sm px-2 py-1 rounded-md shadow-md">
          This issue is best viewed on a larger screen
        </div>
      )}
    </div>
  );
};

export default PDFViewer;