class moduel {
  constructor() {
    this.cityData = [];
  }
  getDataFromDB() {
    $.get("http://localhost:3000/cities/", (data) => {
      this.cityData = data;
      console.log(this.cityData);
      render();
    });
  }
  async handleSearch(cityName) {
    await $.get("http://localhost:3000/city/" + cityName, (data) => {
      data.name = cityName;
      this.cityData.push(data);
      console.log(this.cityData);
    });
  }
  postDataToDataBase() {
    $.post(
      "http://localhost:3000/city",

      this.cityData[this.cityData.length - 1],
      function (response) {
        console.log(response);
      }
    );
  }
  deleteWeatherFromDataBase(cityName) {
    $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/city/" + cityName,

      success: function (response) {
        console.log(response);
      },
    });
  }
}
