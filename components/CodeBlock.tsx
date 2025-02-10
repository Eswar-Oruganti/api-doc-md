import Prism from "prismjs";
import * as React from "react";

interface CodeBlockProps {
  children: string;
  "data-language": string;
}

export const CodeBlock = React.forwardRef<
  { getCode: () => string },
  CodeBlockProps
>(({ children, "data-language": language }, ref) => {
  const localRef = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    if (localRef.current) {
      Prism.highlightElement(localRef.current, false);
    }
  }, [children]);

  // Expose the code text through ref
  React.useImperativeHandle(ref, () => ({
    getCode: () => localRef.current?.textContent || "",
  }));

  return (
    <div className="code" aria-live="polite">
      <pre ref={localRef} className={`language-${language}`}>
        {children}
      </pre>
      <style jsx>
        {`
          .code {
            position: relative;
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
});
