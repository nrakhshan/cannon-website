const originalURL = globalThis.URL;

globalThis.URL = class URL extends originalURL {
 constructor(url, base) {
  let finalUrl = url;

  if (typeof url === 'string' && url.startsWith('blob:')) {
   finalUrl = url;
  }

  super(finalUrl, base);
 }

 static parse(url, base) {
  try {
   return new URL(url, base);
  } catch {
   return null;
  }
 }
} 