function getResult(event) {
  event.preventDefault();

  let weightValue = document.querySelector(".weight-input-js").value;
  let heightValue = document.querySelector(".height-input-js").value;

  let imc = calcIMC(weightValue, heightValue);

  displayResult(imc);
}

function calcIMC(weightValue, heightValue) {
  return Math.round((weightValue / heightValue ** 2) * 10000);
}

function displayResult(imc) {
  let resultImc = document.querySelector("#result-js");
  let resultMsg = document.querySelector("#result-message-js");

  let chartWrapper = document.querySelector("#chart-wrapper-js");
  let iconChart = document.querySelector(".icon-chart");

  if (imc <= 18.5) {
    resultImc.innerHTML = `${imc} kg/m\u00B2`;
    resultMsg.innerHTML = "Your result suggests you are underweight";
    chartWrapper.setAttribute("class", "d-flex justify-content-center");
    iconChart.style.left = `${imc - 14}rem`;
  } else if (imc <= 25) {
    resultImc.innerHTML = `${imc} kg/m\u00B2`;
    resultMsg.innerHTML = "Normal weight";
    chartWrapper.setAttribute("class", "d-flex justify-content-center");
    iconChart.style.left = `${imc - 4}rem`;
  } else if (imc <= 30) {
    resultImc.innerHTML = `${imc} kg/m\u00B2`;
    resultMsg.innerHTML = "Your result suggests you are overweight";
    chartWrapper.setAttribute("class", "d-flex justify-content-center");
    iconChart.style.left = `${imc}rem`;
  } else {
    resultImc.innerHTML = `${imc} kg/m\u00B2`;
    resultMsg.innerHTML = "Your result suggests you are obese";
    chartWrapper.setAttribute("class", "d-flex justify-content-center");
    iconChart.style.left = `${imc}rem`;
  }
}

function reset() {
  document.getElementById("myForm").reset();
}
