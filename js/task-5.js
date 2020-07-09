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

let message;

let countryOfDispatch = prompt("Введите страну отправки", " ");

if (countryOfDispatch !== null) {
  switch (countryOfDispatch.toLowerCase()) {
    case countryChina:
      message = `Доставка в ${countryChina} будет стоить ${priceChina} кредитов.`;
      break;

    case countryChile:
      message = `Доставка в ${countryChile} будет стоить ${priceChile} кредитов.`;
      break;

    case countryAustralia:
      message = `Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов.`;
      break;

    case countryIndia:
      message = `Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов.`;
      break;

    case countryJamaica:
      message = `Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов.`;
      break;

    default:
      message = "В вашей стране доставка не доступна.";
  }
} else {
  message = "Отменено пользователем!";
}

alert(message);
