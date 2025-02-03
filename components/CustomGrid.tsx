export const CustomGrid = ({ children, columns = 2 }) => {
  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {children}
      <style jsx>{`
        .grid-container {
          display: grid;
          gap: 20px; /* Spacing between columns */
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
