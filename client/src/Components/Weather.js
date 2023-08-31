import React, { useState } from "react";
import "./weather.css";

function Weather(){
    const [weather, setWeather] = useState([]);
    const[form, setForm]= useState ({  
        city: "",
        country: "",
  });



        return(
            <div className="weather">
                <span className="title">Bright Weather App</span>
                <br/>
            <form>
                <input type="text" name="city" placeholder="city"/>
                &nbsp; &nbsp; &nbsp; &nbsp; 
            <button className="getweather" >Submit</button>
            </form>

            </div>
        )



}

export default Weather