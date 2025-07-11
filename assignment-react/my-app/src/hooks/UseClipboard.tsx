'use client';

import { useState, useCallback } from 'react';

const UseClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text:string) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      setCopied(false);
    }
  }, []);

  return { copied, copy };
};

export default UseClipboard;
