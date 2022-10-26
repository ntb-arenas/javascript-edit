let firstNum = document.querySelector(".first-num").value;
let secondNum = document.querySelector(".second-num").value;
let result = document.querySelector("#result");
let calculate;

function add() {
  calculate = firstNum + secondNum;
  result.innerHTML = calculate;
}
