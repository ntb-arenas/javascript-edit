const country1 = {
  name: "Portugal",
  capital: "Lisboa",
  population: 10310000,
  minimunSalary: 740,
  flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
};

const country2 = {
  name: "Spain",
  capital: "Madrid",
  population: 47350000,
  minimunSalary: 1050,
  flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
};

const ctryNameEl = document.querySelector("#country-name span");
const ctryPopulationEl = document.querySelector("#country-population span");
const ctryCapitalEl = document.querySelector("#country-capital span");
const ctryMinSalEl = document.querySelector("#country-minimum-salary span");
const ctryFlagEl = document.querySelector("#country-flag");

const ctryMinPopu = document.querySelector("#ctry-min-popu span");
const ctryHighSalaryMin = document.querySelector("#ctry-high-salary-min span");

function displayCountry(countryId) {
  document.querySelector(".country-content").style.display = "flex";

  let country;
  country = countryId === "Portugal" ? country1 : country2;

  ctryNameEl.innerHTML = country.name;
  ctryPopulationEl.innerHTML = country.population;
  ctryCapitalEl.innerHTML = country.capital;
  ctryMinSalEl.innerHTML = country.minimunSalary;
  ctryFlagEl.setAttribute("src", country.flag);

  calc();
}

function calc() {
  if (country1.population < country2.population && country1.minimunSalary < country2.minimunSalary) {
    ctryMinPopu.innerHTML = country1.name;
    ctryHighSalaryMin.innerHTML = country2.name;
  }
}
