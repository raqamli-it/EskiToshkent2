import { useEffect, useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = "f513a4c35a80dc6c28150ee3838b341c"; // OpenWeatherMap dan oling

  const viloyatlar = [
    { id: 1512569, name: "Toshkent" },
    { id: 1514588, name: "Samarqand" },
    { id: 1217662, name: "Buxoro" },
    { id: 1513157, name: "Andijon" },
    { id: 1513245, name: "Namangan" },
    { id: 1512978, name: "Fargʻona" },
    { id: 1514019, name: "Qarshi" },
    { id: 1514215, name: "Nukus" },
    { id: 1513886, name: "Jizzax" },
    { id: 1513567, name: "Guliston" },
    { id: 1513962, name: "Navoiy" },
    { id: 1513024, name: "Urganch" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const promises = viloyatlar.map((viloyat) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?id=${viloyat.id}&appid=${API_KEY}&units=metric&lang=uz`
        )
      );
      const responses = await Promise.all(promises);
      setWeatherData(responses.map((res) => res.data));
    };

    fetchData();
  }, []);

  const getWeatherIcon = (temp) => {
    if (temp > 30) return "☀️";
    if (temp > 20) return "⛅";
    if (temp > 10) return "🌤️";
    if (temp > 0) return "🌧️";
    return "❄️";
  };
  return (
    <div className="">
      <h1>O'zbekiston Viloyatlari Ob-havosi</h1>
      <div className="weather-container">
        {weatherData.map((data, index) => (
          <div key={index} className="weather-card">
            <h2>{data.name}</h2>
            <div className="">{getWeatherIcon(data.main.temp)}</div>
            <p className="">{Math.round(data.main.temp)}°C</p>
            <p className="">{data.weather[0].description}</p>
            <div className="">
              <p>Namlik: {data.main.humidity}%</p>
              <p>Shamol: {data.wind.speed} m/s</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherApp;
