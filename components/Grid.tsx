export const Grid = ({ children, columns = 2 }) => {
  console.log(columns);
  return (
    <div className={`grid-container grid-cols-${columns}`}>
      {children}
      <style jsx>{`
        .grid-container {
          display: grid;
          gap: 42px; /* Spacing between columns */
          align-items: start;
        }

        .grid-cols-1 {
          grid-template-columns: 1fr; /* One column */
        }

        .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr)); /* Two columns */
        }

        /* Mobile view: single column */
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr; /* One column on mobile */
          }
        }
      `}</style>
    </div>
  );
};
