"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let userCreditsBalance;

let userOrder = prompt("Введите количество дроидов к заказу", " ");

if (userOrder === null) {
  message = "Отменено пользователем!";

} else {
  totalPrice = userOrder * pricePerDroid;
  message = `Общая цена заказа ${totalPrice} кредитов`;

  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  }
  if (totalPrice < credits) {
    userCreditsBalance = credits - totalPrice;
    message = `Вы купили ${userOrder} дроидов, на счету осталось ${userCreditsBalance} кредитов.`;
  }
}

console.log(message);
