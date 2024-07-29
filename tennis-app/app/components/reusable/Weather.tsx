import React, { useState, useEffect } from "react";

const WeatherWidget: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>("Guelph");
  const [loading, setLoading] = useState<boolean>(true);

  const apiKey = "003140387aaabb360ee93639d7cd4717";

  const fetchWeather = async (city: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = () => {
    const searchBar = document.querySelector<HTMLInputElement>(".search-bar");
    if (searchBar) {
      setCity(searchBar.value);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return null;
  }

  const { name } = weatherData;
  const { icon, description } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;

  return (
    <div className="card bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <div className="search flex items-center mb-4">
        <input
          type="text"
          className="search-bar p-2 rounded-l-lg w-full text-black"
          placeholder="Search"
          onKeyUp={handleKeyUp}
        />
        <button className="p-2 bg-gray-700 rounded-r-lg" onClick={handleSearch}>
          <img src="/icons/weather.svg" alt="weather icon"/>
        </button>
      </div>
      <div className="weather">
        <h2 className="city text-2xl font-bold">{name}</h2>
        <h1 className="temp text-5xl font-bold">{temp}°C</h1>
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt=""
            className="icon"
          />
          <div className="description ml-2 text-xl">{description}</div>
        </div>
        <div className="humidity mt-2">Humidity: {humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
