import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";

const PDFViewer = dynamic(
    () => import("@/components/PDFViewer"),
    { ssr: false }
);

const Grid = ({ issues, issue, setIssue, className }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [isOpen, setIsOpen] = useState(false);
    const [initialPage, setInitialPage] = useState(1);

    useEffect(() => {
        const issueParam = searchParams.get("issue");
        const pageParam = searchParams.get("page");

        if (issueParam !== null) {
            const issueIndex = Number(issueParam);
            const page = Number(pageParam) || 1;

            if (
                Number.isInteger(issueIndex) &&
                issueIndex >= 0 &&
                issueIndex < issues.length
            ) {
                setIssue(issueIndex);
                setInitialPage(Math.max(1, page));
                setIsOpen(true);
            }
        }
    }, [searchParams, issues.length, setIssue]);

    const handleSelect = (idx) => {
        setIssue(idx);
        setIsOpen(true);
    }

    const handleKeySelect = (e, idx) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect(idx);
        }
    }

    const handleDownload = (file, name) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={className}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {issues.map((issueItem, index) => (
                    <div
                        key={index}
                        className="flex-none h-[100%] text-center"
                        tabIndex={0}
                        data-no-drag="true"
                        onClick={() =>
                            handleSelect(index)
                        }
                        onKeyDown={(e) => handleKeySelect(e, index)}
                    >
                        <div
                            role="button"
                            className="group relative overflow-hidden shadow-md aspect-[3/4] cursor-pointer transition-all duration-150"
                        >
                            <Image
                                src={issueItem.thumbnail}
                                alt={issueItem.name}
                                fill
                                className="object-cover pointer-events-none  transition-transform duration-200"
                                draggable={false}
                                style={{ WebkitUserDrag: 'none' }}
                                priority={false}
                            />

                            {/* Hover */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/60 group-hover:opacity-100">
                                <h2 className="afacad text-2xl font-bold uppercase text-base">
                                    {issueItem.name}
                                </h2>

                                {/* Labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 afacad text-sm font-bold">
                                    <div className="flex">
                                        <span className="rounded-full bg-invert text-secondary px-3 py-1 uppercase">
                                            {issueItem.quarter}
                                        </span>

                                        <span className="border border-base bg-base rounded-full px-3 py-1">
                                            {issueItem.year}
                                        </span>
                                    </div>

                                    <button
                                        className="py-1"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDownload(
                                                issueItem.file,
                                                issueItem.name + ".pdf"
                                            );
                                        }}
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* PDFViewer */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-black/80">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-5 top-5 z-[101] rounded-full px-4 py-2 font-bold text-base"
                    >
                        ✕
                    </button>

                    <PDFViewer issues={issues} issue={issue} initialPage={initialPage} />
                </div>
            )}
        </div>
    )
}

export default Grid