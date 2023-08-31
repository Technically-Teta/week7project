import './App.css';
import { useState, useEffect } from "react";
import weatherSubmit from './Components/weatherSubmit';
import weatherID from './Components/weatherID';
import Weather from './Components/Weather';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [myname, setMyname] = useState('')
  const [message, setMessage] = useState('')

  /// CHECKING TO SEE HOW THIS SHOWS INTHE FRONT END
  const callBackEnd = async () => {
    const response = await fetch('/api/myname');
    const data = await response.json();
    console.log(data);
    setMyname(data.name);
  };

  const callForMessage = () => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        //setMessage(data.message);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    callBackEnd();
    callForMessage();
  }, []);
  

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => {
    fetch("http://localhost:8080/api/weather")
      .then((response) => response.json())
      .then((result) => {
   
        setCity(result.weather[0].name);
        setResult(result);
      });
  }

 const handleSubmit = (e) =>{
  e.preventDefault();
  loadCity();
 }


  return (
    <div className="App">
      <weatherSubmit city={city} handleSubmit={handleSubmit}/>
      {!result ? <p>Please click the botton to see Data</p> : <weatherID data={result} /> }
    <h1>Hello Techtonica!</h1>
        {myname} <Weather/>

        <h2>Message from the backend: {message} </h2>

    </div>
  );
}

////



////

export default App;
