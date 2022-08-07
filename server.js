const axios = require("axios").default;
const express = require("express");
const app = express();
const PORT = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const WEATHER_CONTROLER = require("./model/City");
var cors = require("cors"); //use this
app.use(cors()); //and this

const CHANGE_ME_API =
  "http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=16afded51d593d428f7bc04428b43e6d";

async function getCityWeatherInfo(cityName) {
  const cityGeoResponse = await axios.get(CHANGE_ME_API + `&q=${cityName}`);
  const cityGeo = cityGeoResponse.data[0];
  if (cityGeo) {
    const cityWeatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        cityGeo.lat +
        "&lon=" +
        cityGeo.lon +
        "&appid=16afded51d593d428f7bc04428b43e6d"
    );
    const cityWeather = cityWeatherResponse.data;
    const weatherDescreption = cityWeather.weather[0];
    const cityWeatherInfo = {
      temperature: cityWeather.main.temp - 273.15,
      condition: weatherDescreption.description,
      conditionPic: weatherDescreption.icon,
    };
    return cityWeatherInfo;
  }
  return "problem With Name";
}

app.get("/city/:cityName", async (req, res) => {
  cityName = req.params.cityName;

  res.send(await getCityWeatherInfo(cityName));
});
app.get("/cities", async (req, res) => {
  res.send(await WEATHER_CONTROLER.findAllCities());
});

app.post("/city", function (req, res) {
  const cityInfo = req.body;

  let tempObj = {
    temperature: cityInfo.temperature,
    condition: cityInfo.condition,
    conditionPic: cityInfo.conditionPic,
  };
  WEATHER_CONTROLER.addWeatherToDataBase(cityInfo.name, tempObj);

  res.send(cityInfo);
});

app.delete("/city/:cityName", function (req, res) {
  const cityName = req.params.cityName;
  WEATHER_CONTROLER.deleteSpecificCity(cityName);
  res.send(`Delete record with id${cityName}`);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
