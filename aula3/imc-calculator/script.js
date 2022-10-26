function calculateIMC(event) {
  event.preventDefault();
  let weightValue = document.querySelector(".weight-input-js").value;
  let heightValue = document.querySelector(".height-input-js").value;
  let imc = Math.round(weightValue / heightValue ** 2);
  let resultImc = document.querySelector(".result-js");

  if (imc < 18.5) {
    resultImc.innerHTML = `BMI = ${imc} kg/m2 (Underweight)`;
  } else if (imc < 25) {
    resultImc.innerHTML = `BMI = ${imc} kg/m2 (Normal)`;
  } else {
    resultImc.innerHTML = `BMI = ${imc} kg/m2 (Overweight)`;
  }
}
