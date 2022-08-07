function render() {
  $(".container").empty();

  let cityData = model.cityData;

  for (i of cityData) {
    let saved;
    if (i.saved == false) saved = "fa-solid fa-circle-minus";
    else saved = "fa-solid fa-circle-plus";
    $(".container").append(
      ` <div class = "element">   <i class="${saved}"></i>
      <p id="name">${i.name}</p><p> ${parseFloat(i.temperature).toFixed(
        2
      )}</p><p> ${i.condition} </p> <img src=https://openweathermap.org/img/w/${
        i.conditionPic
      }.png> </div>`
    );
  }
}
