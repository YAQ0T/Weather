const mongoose = require("mongoose");
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/Weather", { useNewUrlParser: true });
const weatherSchema = new Schema({
  name: String,
  temperature: Number,
  condition: String,
  conditionPic: String,
  saved: Boolean,
});

const weather = new mongoose.model("weather", weatherSchema);

function addWeatherToDataBase(cityName, cityWeatherInfo) {
  let tempWeather = new weather({
    name: cityName,
    temperature: cityWeatherInfo.temperature,
    condition: cityWeatherInfo.condition,
    conditionPic: cityWeatherInfo.conditionPic,
    saved: false,
  });
  tempWeather.save();
}

async function findAllCities() {
  weather.find({}, (err, res) => {});
  return await weather.find({});
}

function deleteSpecificCity(cityName) {
  weather.deleteMany({ name: cityName }, function (err, res) {});
}

module.exports = { addWeatherToDataBase, findAllCities, deleteSpecificCity };
