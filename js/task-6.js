"use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число.");

  if (input === null) {
    break;
  }

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    console.log(total);
  } else {
    total += Number(input);
  }
} while (true);

alert(`Общая сумма чисел равна ${total}`);
