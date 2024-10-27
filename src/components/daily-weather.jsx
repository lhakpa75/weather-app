import daisyui from "daisyui";
import React from "react";

function DailyWeather({ day, temp, weather }) {
  return (
    <div className="card bg-gray-800 text-center p-6 shadow-lg rounded-xl transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="text-2xl font-semibold text-white">{day}</h2>
        <h2 className="text-4xl font-bold text-white">{temp}°F</h2>
        <p className="text-lg text-gray-400">{weather}</p>
      </div>
    </div>
  );
}

export default DailyWeather;
