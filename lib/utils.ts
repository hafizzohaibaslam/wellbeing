import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const dateConversion = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getShortDescription = (description = '') => {
  if (typeof window === 'undefined') {
    const text = description.replace(/<[^>]*>/g, '');
    if (text.length <= 100) return text;
    return text.slice(0, 100).trim() + '...';
  }
  
  // Client-side: Using DOM
  const el = document.createElement('div');
  el.innerHTML = description;
  const text = el.textContent || el.innerText || "";
  if (text.length <= 100) return text;
  return text.slice(0, 100).trim() + '...';
};

export const categories = {
  'news': 'News',
  'reports': 'Reports',
  'market-updates': 'Market Updates',
  'blogs': 'Blogs',
  'share-of-voice': 'Share of Voice'
}