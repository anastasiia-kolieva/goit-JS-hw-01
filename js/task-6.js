"use strict";
let input;
let total = 0;
const x = NaN;
do {
  let input = prompt("Введите число.");
  if (input !== null) {
    if (input != x) {
      total += input;
      continue;
    } else {
      alert("Было введено не число, попробуйте еще раз");
      total = total;
      continue;
    }
  }
} while (input == null);

alert(`Общая сумма чисел равна ${total}`);