"use strict";

const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".calculator__display");

const btnClear = document.querySelector(".btn-clear");
const btnEqual = document.querySelector(".btn-equal");

const btnBack = document.querySelector(".btn-back");

let value = "";

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    value += btns[i].value;
    display.textContent = value;
  });
}

btnClear.addEventListener("click", function () {
  display.textContent = "";
  value = "";
});

btnEqual.addEventListener("click", function () {
  value = Function("return " + value)();
  display.textContent = value;
});

btnBack.addEventListener("click", function () {
  value = value.slice(0, -1);
  display.textContent = value;
});
