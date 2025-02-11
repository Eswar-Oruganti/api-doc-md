import React from "react";
import Link from "next/link";
import TopNavSelect from "./TopNavSelect";

export function TopNav({ children }) {
  return (
    <nav>
      <div className="select">
        <TopNavSelect />
      </div>
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
            background: var(--background-page);
            border-bottom: 1px solid var(--border-color-primary);
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }

          @media (min-width: 768px) {
            .select {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
