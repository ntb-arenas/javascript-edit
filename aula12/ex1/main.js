// a) Criar uma variável do tipo string com o valor "Hello World" e transformar todos os seus
// caracteres em letras maiúsculas. Resultado deverá ser imprimido num h1 em HTML.
// b) Contabilizar quantas vezes a letra "a" ocorre na frase "Portugal vai vencer o mundial". E
// a letra e? Imprimir os respectivos resultados num h2 no mesmo ficheiro html que o
// exercício anterior.
// c) Transformar a string "Segunda-feira, Terça-feira, Quarta-feira,Quinta-feira,Sexta-feira"
// num array (considerar "," como separador). Imprimir resultado num console.log
// d) Considerando o objeto { country: "Portugal, capital: "Lisbon", currency: "Euro" }, de que
// formas podemos aceder ao valor da propriedade capital.
// e) Considerando objeto { a: 4, b: 10, c: 4, d: 9, e: 20 }, somar os valores de todas as suas
// propriedades com recurso a ciclos (loops). Imprimir resultado num h3 em HTML

// Tendo em conta o array [{ name: "The Witcher 3" , rating: 94 }, { name: "Elden Ring" ,
//   rating: 91 }, { name: "Fifa 23" , rating: 80 }, { name: "Jogo do Galo" , rating: 20 },
//   { name: "Mass Effect 2" , rating: 98 } ]
//   f) Imprimir em HTML, qual o jogo com melhor rating (imprimindo o nome do jogos e
//   respectivo rating)
//   g) Imprimir em HTML, qual o jogo com menor rating (imprimindo o nome do jogos e
//   respectivo rating)
//   h) Imprimir em HTML todos os jogos por ordem decrescente de rating.
//   i) Calcular a média do rating de todos os jogos e imprimir em HTML
//   j) Introduzir um novo jogo no array
//   k) Remover o jogo com menor rating do array
//********************************** */ Ex A
const aString = "Hello World!";
const helloWorldEl = document.querySelector("#hello-world");

aString.toUpperCase();

helloWorldEl.innerHTML = aString;
//********************************** */ Ex B
const results = document.querySelector("#results-count");
const bString = "Portugal vai vencer o mundial";

function countChars(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }

  const resultString = `Ocorre a letra "${char}" ${count} vezes na frase "${str}"`;

  results.innerHTML = resultString;
}

countChars(bString, "a");
//********************************** */ Ex C
const cString = "Segunda-feira, Terça-feira, Quarta-feira,Quinta-feira,Sexta-feira";
const arr = cString.split(",");
console.log(arr);
//********************************** */ Ex D
const objects = { country: "Portugal", capital: "Lisbon", currency: "Euro" };
console.log(objects.capital);
//********************************** */ Ex E
const resultsEl = document.querySelector("#results-e");
const objectsEx = { a: 4, b: 10, c: 4, d: 9, e: 20 };

let sum = 0;

for (const property in objectsEx) {
  sum = sum + objectsEx[property];
}

resultsEl.innerHTML = `Total = ${sum}`;
//********************************** */ Ex F
const arrGames = [
  { name: "The Witcher 3", rating: 94 },
  { name: "Elden Ring", rating: 91 },
  { name: "Fifa 23", rating: 80 },
  { name: "Jogo do Galo", rating: 20 },
  { name: "Mass Effect 2", rating: 98 },
];

addGame("God of War Ragnarök", 100);

const gamesEl = document.querySelector("#games");
const highestRatingEl = document.querySelector("#highest-rating");
const lowestRatingEl = document.querySelector("#lowest-rating");
const averageRatingEl = document.querySelector("#average-rating");

function displayGames() {
  const gamesHtml = arrGames
    .map((game) => {
      return `
    <div class="col">
     <p><strong>Name: </strong>${game.name}</p>
     <p><strong>Rating: </strong>${game.rating}</p>
    </div>
    `;
    })
    .join("");

  gamesEl.innerHTML = gamesHtml;
}

function gameRating(rating) {
  return arrGames.reduce((RatingGame, currentGame) => {
    if (rating === "maior") {
      if (RatingGame.rating < currentGame.rating) {
        return currentGame;
      }
      return RatingGame;
    } else {
      if (RatingGame.rating > currentGame.rating) {
        return currentGame;
      }
      return RatingGame;
    }
  });
}

function sortGameRating() {
  const sortedLowestRating = document.querySelector("#sorted-games-descending");
  const gamesHtml = arrGames
    .sort(function (a, b) {
      const ratingA = a.rating;
      const ratingB = b.rating;
      return ratingA < ratingB ? 1 : ratingA > ratingB ? -1 : 0;
    })
    .map((game) => {
      return `
  <div class="col">
   <p><strong>Name: </strong>${game.name}</p>
   <p><strong>Rating: </strong>${game.rating}</p>
  </div>
  `;
    })
    .join("");

  sortedLowestRating.innerHTML = gamesHtml;
}

function calcAverageRating() {
  let sum = 0;
  arrGames.forEach((game) => {
    sum = sum + game.rating;
  });

  return `    
    Average Rating of the games ${sum / arrGames.length}
  `;
}

function addGame(game, rating) {
  arrGames.push({ name: game, rating: rating });
}

function removeLowestRating() {
  arrGames.sort((a, b) => b.rating - a.rating);
  arrGames.pop();
  console.log(arrGames);
}

highestRatingEl.innerHTML = `
<h3>Game with the highest rating</h3>
<p><strong>Name: </strong>${gameRating("maior").name}</p>
<p><strong>Rating: </strong>${gameRating("maior").rating}</p>
`;

lowestRatingEl.innerHTML = `
<h3>Game with the lowest rating</h3>
<p><strong>Name: </strong>${gameRating("menor").name}</p>
<p><strong>Rating: </strong>${gameRating("menor").rating}</p>
`;

averageRatingEl.innerHTML = calcAverageRating();

displayGames();
sortGameRating();
removeLowestRating();
//********************************** */

async function loadWeather() {
  let res = await fetch("https://weatherdbi.herokuapp.com/data/weather/Manila");
  let weather = await res.json();
  console.log(weather);
}

loadWeather();
