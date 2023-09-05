import React, { useState } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";
import Picture from "./Picture"

function Weather() {
  const APIKEY = '8c03101cdaa9dc6cf93256ee7318adf1';

  const [form, setForm] = useState({
    city: "",
  });

  const [weather, setWeather] = useState({});
  
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === '') {
      alert("Add the City Name please");
    } else {
      const url =  `http://127.0.0.1:8080/api/weather?cityName=${form.city}`
      //const url = `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`;
      console.log("the url is : " + url);
      const data = await fetch(url).then((res) => res.json()); // this returns a promise

      console.log("The data is ..." + JSON.stringify(data));
      // sets weather state and obj as key value pair
      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    console.log(form.city);
  };

  return (
    <>
      <div className="weather">
        <span className="title">The Good Weather App</span>
        <br />

       
        
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp; &nbsp;

        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>

        <div className="humidity">
          <span className="humidity-weather"></span>
        </div>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </>
  );
}

export default Weather;
