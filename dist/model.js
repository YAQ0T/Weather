class Moduel {
  constructor() {
    this.cityData = [];
  }
  getDataFromDB() {
    $.get("http://localhost:3000/cities/", (data) => {
      this.cityData = data;

      render();
    });
  }
  async handleSearch(cityName) {
    await $.get("http://localhost:3000/city/" + cityName, (data) => {
      data.name = cityName;
      this.cityData.push(data);
    });
  }
  postDataToDataBase() {
    $.post(
      "http://localhost:3000/city",

      this.cityData[this.cityData.length - 1],
      function (response) {}
    );
  }
  deleteWeatherFromDataBase(cityName) {
    return $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/city/" + cityName,

      success: function (response) {},
    });
  }
}
function changeBooleanSetuation(BOOL) {
  weather;
}
