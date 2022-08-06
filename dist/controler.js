let test = new moduel("");

$("#searchButton").on("click", async function () {
  let cityName = $("#searchText").val();
  await test.handleSearch(cityName);
  render();
  test.postDataToDataBase();
});
test.getDataFromDB();
