import React from "react";

function Stats({
  country,
  city,
  weather,
  temp,
  humidity,
  windSpeed,
  visibility,
}) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-gray-800 text-white m-10 rounded-xl">
      <div className="stat p-4">
        <div className="text-4xl font-extrabold mb-2">
          {city}, {country}
        </div>
        <div className="text-2xl text-gray-400">{weather}</div>
      </div>

      <div className="stat p-4 border-t lg:border-t-0 lg:border-l border-gray-700">
        <div className="stat-title text-gray-400">Temperature</div>
        <div className="stat-value text-3xl font-bold">{temp}°F</div>
      </div>

      <div className="stat p-4 border-t lg:border-t-0 lg:border-l border-gray-700">
        <div className="stat-title text-gray-400">Humidity</div>
        <div className="stat-value text-3xl font-bold">{humidity}%</div>
      </div>

      <div className="stat p-4 border-t lg:border-t-0 lg:border-l border-gray-700">
        <div className="stat-title text-gray-400">Wind Speed</div>
        <div className="stat-value text-3xl font-bold">{windSpeed} mph</div>
      </div>

      <div className="stat p-4 border-t lg:border-t-0 lg:border-l border-gray-700">
        <div className="stat-title text-gray-400">Visibility</div>
        <div className="stat-value text-3xl font-bold">
          {visibility / 1000} km
        </div>
      </div>
    </div>
  );
}

export default Stats;
