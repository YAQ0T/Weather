let model = new Moduel("");

$("#searchButton").on("click", async function () {
  let cityName = $("#searchText").val();
  if (cityName == "") {
    alert("Please fill the SEARCH BAR");
  } else {
    await model.handleSearch(cityName);
    render();
  }
});
model.getDataFromDB();

$(".container").on("click", "i", async function () {
  let cityName = $(this).closest(".element").find("#name").text();

  if ($(this).hasClass("fa-circle-plus")) {
    $(this).removeClass(`fa-circle-plus`);
    $(this).addClass(`fa-circle-minus`);
    model.postDataToDataBase();
  } else {
    $(this).removeClass(`fa-circle-minus`);
    await model.deleteWeatherFromDataBase(cityName);
    $(this).addClass(`fa-circle-plus`);
  }
});
