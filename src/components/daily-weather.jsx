import React from "react";

function DailyWeather({ day, temp, weather, icon }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`; // Construct the icon URL

  return (
    <div className="p-4 bg-white rounded-lg text-center">
      <h2 className="text-xl font-bold text-gray-900">{day}</h2>
      <img src={iconUrl} alt={weather} className="mx-auto mb-2" />
      <p className="text-2xl font-semibold text-gray-600">{temp}°C</p>
      <p className="text-gray-400">{weather}</p>
    </div>
  );
}

export default DailyWeather;
