import Prism from "prismjs";
import * as React from "react";

export function CodeBlock({ children, "data-language": language }) {
  const ref = React.useRef(null);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  const copyToClipboard = () => {
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.textContent).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
      });
    }
  };

  return (
    <div className="code" aria-live="polite">
      <button className="copy-btn" onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
      <style jsx>
        {`
          .code {
            position: relative;
          }

          .copy-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            transition: background 0.2s;
          }

          .copy-btn:hover {
            background: rgba(0, 0, 0, 0.9);
          }

          .code :global(pre[class*="language-"]) {
            text-shadow: none;
            border-radius: 4px;
            padding: 12px;
            overflow-x: auto;
          }
        `}
      </style>
    </div>
  );
}
