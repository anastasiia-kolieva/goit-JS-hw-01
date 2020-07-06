"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let userOrder = prompt("Введите количество дроидов к заказу", " ");

if (userOrder == null) {
  let message = "Отменено пользователем!";

  console.log(message);
} else {
  let totalPrice = userOrder * pricePerDroid;
  console.log(`Общая цена заказа ${totalPrice} кредитов`);

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  }
  if (totalPrice < credits) {
    let userCreditsBalance = credits - totalPrice;
    console.log (`Вы купили ${userOrder} дроидов, на счету осталось ${userCreditsBalance} кредитов.`)
  }
}
