function calculateIMC(event) {
  event.preventDefault();

  let weightValue = document.querySelector(".weight-input-js").value;
  let heightValue = document.querySelector(".height-input-js").value;

  let imc = Math.round((weightValue / heightValue ** 2) * 10000);

  let resultImc = document.querySelector(".result-js");
  let resultMsg = document.querySelector("#result-message-js");

  let chartWrapper = document.querySelector("#chart-wrapper");
  let iconWrapper = document.querySelector(".icon-wrapper");

  if (imc <= 18.5) {
    resultImc.innerHTML = `${imc} kg/m \u00B2`;
    resultMsg.innerHTML = "Your result suggests you are underweight";
    chartWrapper.setAttribute("class", "d-inline");
    iconWrapper.style.left = `${imc - 1.5}rem`;
  } else if (imc <= 25) {
    resultImc.innerHTML = `${imc} kg/m \u00B2`;
    resultMsg.innerHTML = "Normal weight";
    chartWrapper.setAttribute("class", "d-inline");
    iconWrapper.style.left = `${imc + 8}rem`;
  } else if (imc <= 30) {
    resultImc.innerHTML = `${imc} kg/m \u00B2`;
    resultMsg.innerHTML = "Your result suggests you are overweight";
    chartWrapper.setAttribute("class", "d-inline");
    iconWrapper.style.left = `${imc + 12}rem`;
  } else {
    resultImc.innerHTML = `${imc} kg/m \u00B2`;
    resultMsg.innerHTML = "Your result suggests you are obese";
    chartWrapper.setAttribute("class", "d-inline");
    iconWrapper.style.left = `${imc + 13}rem`;
  }
}

function reset() {
  document.getElementById("myForm").reset();
}
