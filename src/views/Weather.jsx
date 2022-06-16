import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/Weather.css'




    const Weather = () => {
    const [weather, setWeather] = useState({
    temp: 0,
    feels: 0,
    min: 0,
    max: 0,
    name: "",
    description: "",
    });

    useEffect(() => {                                                                                       
    const fetchWeather = async () => {
        const response = await axios.get( //workes in 24hs
            `https://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=710895c1d23edd144cbcfc5dce12860ff&&units=metric
            `);
            //(`https://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=${process.env.WEATHER_API_Key}`)

        setWeather({
        temp: response.data.main.temp,
        feels: response.data.main.feels_like,
        min: response.data.main.temp_min,
        max: response.data.main.temp_max,
        description: response.data.weather[0].main,
        name: response.data.name,
        });
        //console.log(response)
    };
    fetchWeather();
    }, []);


    return (
    <div className="weather-page">

        <h3>Your Location</h3>
        <p> {weather.name} {weather.temp}°C</p>
        <p>{weather.description}</p>
        <p>Feels like: {weather.feels}°C</p>
        <p>Today's least: {weather.min}°C</p>
        <p>Today's max {weather.max}°C</p>
        
    </div>

    );
};

export default Weather;