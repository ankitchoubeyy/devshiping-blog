"use client";

import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PostContent({ content }) {
  const [parsedContent, setParsedContent] = useState([]);

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const elements = Array.from(tempDiv.childNodes).map((node, index) => {
      if (node.nodeName === "PRE" && node.firstChild?.nodeName === "CODE") {
        const code = node.textContent;
        return (
          <SyntaxHighlighter
            key={index}
            language="javascript" // You can dynamically detect language if needed
            style={okaidia}
            wrapLines
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        );
      } else {
        return <div key={index} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />;
      }
    });

    setParsedContent(elements);
  }, [content]);

  return <div className="prose max-w-none post-content">{parsedContent}</div>;
}
