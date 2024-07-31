import React from "react";

function CardGrid() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card shadow-lg p-4 bg-white">
        <h2 className="card-title">Card Title 1</h2>
        <p>This is a responsive card using DaisyUI and TailwindCSS.</p>
      </div>
      <div className="card shadow-lg p-4 bg-white">
        <h2 className="card-title">Card Title 2</h2>
        <p>This is another responsive card with different content.</p>
      </div>
      <div className="card shadow-lg p-4 bg-white">
        <h2 className="card-title">Card Title 3</h2>
        <p>This card adapts to screen sizes, showcasing responsive design.</p>
      </div>
    </div>
  );
}

export default CardGrid;
