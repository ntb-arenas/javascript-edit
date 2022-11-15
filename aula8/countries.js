// const countries = [
//     {
//       name: "Portugal",
//       capital: "Lisboa",
//       population: 10310000,
//       minimunSalary: 740,
//       flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
//     },
//     {
//       name: "Spain",
//       capital: "Madrid",
//       population: 47350000,
//       minimunSalary: 1050,
//       flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
//     },
//     {
//       name: "France",
//       capital: "Paris",
//       population: 67390000,
//       minimunSalary: 1539,
//       flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
//     },
//     {
//       name: "Germany",
//       capital: "Berlin",
//       population: 83240000,
//       minimunSalary: 1584,
//       flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
//     },
//     {
//       name: "United Kingdom",
//       capital: "Lonndon",
//       population: 67220000,
//       minimunSalary: 1598,
//       flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
//     },
//     {
//       name: "The Netherlands",
//       capital: "Amsterdam",
//       population: 17440000,
//       minimunSalary: 1635,
//       flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
//     },
//   ];

  // const country1 = {
  //   name: "Portugal",
  //   capital: "Lisboa",
  //   population: 10310000,
  //   minimunSalary: 740,
  //   flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  // };

  // const country2 = 
  // {
  //   name: "Spain",
  //   capital: "Madrid",
  //   population: 47350000,
  //   minimunSalary: 1050,
  //   flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  // };

  //Arrays
  // const listOfNumbers = [1,2,3,4,5];

  // function displayCountryPortugal(){

  //   document.querySelector("img").src = country1.flag;
  //   document.querySelector(".name-js span").innerHTML = country1.name;
  //   document.querySelector(".capital-js span").innerHTML = country1.capital;
  //   document.querySelector(".population-js span").innerHTML = country1.population;
  //   document.querySelector(".minimum-js span").innerHTML = country1.minimunSalary;
  // }

  
  // function displayCountrySpain(){

  //   document.querySelector("img").src = country2.flag;
  //   document.querySelector(".name-js span").innerHTML = country2.name;
  //   document.querySelector(".capital-js span").innerHTML = country2.capital;
  //   document.querySelector(".population-js span").innerHTML = country2.population;
  //   document.querySelector(".minimum-js span").innerHTML = country2.minimunSalary;
  // }

  // function displayCountry(countryId){
  //   let country;

  //   if(countryId === "Portugal"){
  //     country = country1;
  //   }
  //   else{
  //     country = country2;
  //   }
  //   document.querySelector("img").src = country2.flag;
  //   document.querySelector(".name-js span").innerHTML = country2.name;
  //   document.querySelector(".capital-js span").innerHTML = country2.capital;
  //   document.querySelector(".population-js span").innerHTML = country2.population;
  //   document.querySelector(".minimum-js span").innerHTML = country2.minimunSalary;
  // }

  let countries = [];
  
  fetch("https://restcountries.com/v2/all").then(resp => resp.json()).then(countriesList => {
      console.log(countriesList);
      countries = countriesList;
      countries.forEach(country => {
      let button = document.createElement("option");
      button.setAttribute("class","btn btn-primary");
      button.innerHTML = country.name;
      button.value = country.name
      document.querySelector(".buttons-js").appendChild(button);
    })

    let orderedAreaCountries = countries.filter(country => !!country.area).sort((countryA,countryB) => countryB.area - countryA.area);
    let orderedPopCountries = countries.sort((countryA,countryB) => countryB.population - countryA.population);
    let countryHP = orderedPopCountries[0];
    let countryLA = orderedAreaCountries[orderedAreaCountries.length - 1];
    let countryHA = orderedAreaCountries[0];
    let countryLP = orderedPopCountries[orderedPopCountries.length - 1];
    // let countryHP = countries.map(country => country.population).sort((a,b)=> b -a);
    document.querySelector(".population-value-js").innerHTML = `${countryHP.name} with ${countryHP.population}`;
    document.querySelector(".less-population-value-js").innerHTML = `${countryLP.name} with ${countryLP.population}`;
    document.querySelector(".highest-area-value-js").innerHTML = `${countryHA.name} with ${countryHA.area}`;
    document.querySelector(".lowest-area-value-js").innerHTML = `${countryLA.name} with ${countryLA.area}`;
  });

  function displayCountry(){
    document.querySelector(".country-info-js").style.display = "block";
    let selectedCountry = document.querySelector("select").value;

    let country = countries.find(country => country.name === selectedCountry);

    document.querySelector("img").src = country.flag;
    document.querySelector(".name-js span").innerHTML = country.name;
    document.querySelector(".capital-js span").innerHTML = country.capital;
    document.querySelector(".population-js span").innerHTML = country.population;
    document.querySelector(".area-js span").innerHTML = country.area;
  }