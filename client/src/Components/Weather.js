import React, { useState } from "react";
import "./weather.css";

function Weather(){
    const APIKEY = '8c03101cdaa9dc6cf93256ee7318adf1'
    const [weather, setWeather] = useState([]);
    const[form, setForm]= useState ({  
        city: "",
        country: "",
  });

async function weatherData(e){
    e.preventDefault();
    if (form.city ==''){
        alert("Add the City Name please");
    }else{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
        ).then(res => console.log(res.json))  // this is a promise
        .then((data) => console.log(data))
    }
}


 const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
        console.log(form.city)
 }

        return(
            <div className="weather">
                <span className="title">Bright Weather App</span>
                <br/>
            <form>
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
                &nbsp; &nbsp; &nbsp; &nbsp; 
             <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
            </form>

            </div>
        )



}

export default Weather