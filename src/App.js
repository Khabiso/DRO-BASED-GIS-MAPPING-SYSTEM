import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drone_Imagery from "./pages/Drone_Imagery";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import Pagenotfound from "./pages/Pagenotfound";



import { useState } from "react";
import Search from './components/search/search';
import Forecast from "./components/forecast/forecast";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import './App.css';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Drone" element={<Drone_Imagery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Render components from the first App.js when "/menu" is clicked */}
          <Route path="/weather" element={
            <div className="container">
              <Search OnSearchChange={handleOnSearchChange} />
              {currentWeather && <CurrentWeather data={currentWeather} />}
              {forecast && <Forecast data={forecast} />}
            </div>
          } />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;



























































































/*function App() {

 const handleOnSearchChange = (searchData) =>{
  console.log(searchData);
 }

  return (
    <div className="container">
     <Search OnSearchChange={handleOnSearchChange}/>
     <CurrentWeather/>
    </div>
  );
}

export default App;
*/