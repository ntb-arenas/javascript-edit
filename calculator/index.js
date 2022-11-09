let firstNum = document.querySelector(".first-num").value;
let secondNum = document.querySelector(".second-num").value;
let result = document.querySelector(".result");

function add(event, firstNum, secondNum) {
  event.preventDefault();
  let calculate = firstNum + secondNum;
  result.innerHTML = calculate;
}
