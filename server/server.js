const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dataWeather = require("./data")

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());


app.get('/contactme', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactme.html'));

})


app.use('*', (req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, '404.html'));
})



// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Welcome' });
  });

// creates an endpoint for the route /api/weather
app.get('/api/weather', (req, res) => {
  res.json(dataWeather);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`); 
  });

  //creates an endpoint for the route /api  -TEST
app.get('/api', (req, res) => {
  res.json({ message: 'get all your weather info here!' });
});

//creates an endpoint to get a url to get the weather data. 
app.get('/api/weather', (req, res) => {
    const city=req.query.cityName;
    const APIKEY = process.env.APIKEY;
    const params = new URLSearchParams({
        q: req.query.cityName,
        appid: process.env.APIKEY,
        units: "imperial",
    })
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    console.log(url)
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send({ data});
    
  })
    .catch((err) => {
        console.log(err)
    });

});