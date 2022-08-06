function render() {
  $(".container").empty();

  let A = test.cityData;

  for (i of A)
    $(".container").append(
      `<p> ${i.name} ${parseFloat(i.temperature).toFixed(2)} ${
        i.condition
      } </p> <img src=https://openweathermap.org/img/w/${i.conditionPic}.png> `
    );
}
