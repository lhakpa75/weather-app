import React from "react";

function CardGrid() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card shadow-lg p-4 bg-white">
        <h2 className="card-title">Brownstone Remodeling</h2>
        <p>Preserving the past, enhancing the future.</p>
      </div>
      <div className="card shadow-lg p-4 bg-white">
        <h2 className="card-title">Residential Remodeling</h2>
        <p>Turning your dream space into reality.</p>
      </div>
      <div className="card shadow-lg p-4 bg-white">
        <h2 className="card-title">Commercial Remodeling</h2>
        <p>Revitalize your business environment for success</p>
      </div>
    </div>
  );
}

export default CardGrid;
