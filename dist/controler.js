let model = new Moduel("");

$("#searchButton").on("click", async function () {
  let cityName = $("#searchText").val();
  await model.handleSearch(cityName);
  render();
});
model.getDataFromDB();

$(".container").on("click", "i", async function () {
  if ($(this).hasClass("fa-circle-plus")) {
    $(this).removeClass(`fa-circle-plus`);
    $(this).addClass(`fa-circle-minus`);
    model.postDataToDataBase();
  } else {
    $(this).removeClass(`fa-circle-minus`);
    $(this).addClass(`fa-circle-plus`);
    let cityName = $(this).closest(".element").find("#name").text();
    await model.deleteWeatherFromDataBase(cityName);
    model.getDataFromDB();
  }
});
