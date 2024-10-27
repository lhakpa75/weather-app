import React from "react";
import DailyWeather from "./daily-weather";

function DailyForecast({ forecast }) {
  const days = forecast.list.filter((item, index) => index % 8 === 0); // Get the forecast for each day (every 24 hours)

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-lg">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-2">
          5-Day Forecast
        </h1>
        <p className="text-lg text-gray-400">
          Stay updated with the latest weather forecast.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {days.map((day, index) => (
          <DailyWeather
            key={index}
            day={new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            temp={day.main.temp}
            weather={day.weather[0].description}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
