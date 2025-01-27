import React from "react";
import Link from "next/link";

export function TopNav({ children }) {
  return (
    <nav>
      {/* <section>{children}</section> */}
      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            height: 56px;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 2rem;
            background: white;
            border-bottom: 1px solid var(--border-color);
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </nav>
  );
}
