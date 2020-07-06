"use strict";

const countryChina = "китай";
const countryChile = "чили";
const countryAustralia = "австралия";
const countryIndia = "индия";
const countryJamaica = "ямайка";

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let countryOfDispatch = prompt("Введите страну отправки", " ");

if (countryOfDispatch !== null) {
  switch (countryOfDispatch.toLowerCase()) {
    case countryChina:
      alert(
        `Доставка в ${countryChina} будет стоить ${priceChina} кредитов.`
      );
      break;

    case countryChile:
      alert(
        `Доставка в ${countryChile} будет стоить ${priceChile} кредитов.`
      );
      break;

    case countryAustralia:
      alert(
        `Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов.`
      );
      break;

    case countryIndia:
      alert(
        `Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов.`
      );
      break;

    case countryJamaica:
      alert(
        `Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов.`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна.");
  }
} else {
  alert("Отменено пользователем!");
}
