function updateWorldClocks() {
  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");

  johannesburgDateElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("ddd, MMM Do, YYYY");
  johannesburgTimeElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("hh:mm:ss A");

  // London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("ddd, MMM Do, YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("hh:mm:ss A");

  // São Paulo
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");

  saoPauloDateElement.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("ddd, MMM Do, YYYY");
  saoPauloTimeElement.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss A");

  // Dubai
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");

  dubaiDateElement.innerHTML = moment()
    .tz("Asia/Dubai")
    .format("ddd, MMM Do, YYYY");
  dubaiTimeElement.innerHTML = moment().tz("Asia/Dubai").format("hh:mm:ss A");

  // Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");

  seoulDateElement.innerHTML = moment()
    .tz("Asia/Seoul")
    .format("ddd, MMM Do, YYYY");
  seoulTimeElement.innerHTML = moment().tz("Asia/Seoul").format("hh:mm:ss A");

  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");

  melbourneDateElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("ddd, MMM Do, YYYY");
  melbourneTimeElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("hh:mm:ss A");
}

function updateCityClocks(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let selectedCityElement = document.querySelector("#selected-city");

    selectedCityElement.innerHTML = `
      <h3 class="city-selected">${cityName}</h3>
      <div class="time-selected">${cityTime.format("hh:mm:ss A")}</div>
      <div class="date-selected">${cityTime.format("ddd, MMM Do, YYYY")}</div>`;
  }
}

updateWorldClocks();
setInterval(updateWorldClocks, 1000);

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", updateCityClocks);
