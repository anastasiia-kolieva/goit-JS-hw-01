"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let userPassword = prompt("Введите пароль", " ");

if (userPassword == null) {
  let message = "Отменено пользователем!";
  alert(message);
} else {
  if (userPassword == ADMIN_PASSWORD) {
    let message = "Добро пожаловать!";
    alert(message);
  }
  if (userPassword != ADMIN_PASSWORD) {
    let message = "Доступ запрещен, неверный пароль!";
    alert(message);
  }
}
