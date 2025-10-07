// src/utils/reading.js
export function calculateReadingTime(text) {
    if (!text) return "1 min read";
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  }
  
  export function excerptFromMarkdown(md = "", max = 160) {
    // strip fenced code blocks
    let t = md.replace(/```[\s\S]*?```/g, " ");
    // strip inline code
    t = t.replace(/`[^`]*`/g, " ");
    // remove markdown headings, links, lists, images, emphasis characters
    t = t.replace(/(!?\[.*?\]\(.*?\))|[#>*_\-\[\]\(\)~]/g, " ");
    // collapse whitespace
    t = t.replace(/\s+/g, " ").trim();
    if (t.length <= max) return t;
    return t.slice(0, max).trim() + "...";
  }
  