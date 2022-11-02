const movies = {
  title: "Top Gun: Maverick",
  genre: "Action/Adventure",
  runningTime: "2h 11m",
  language: "English",
  country: "United States",
  imgUrl: "topGunMav.jpg",
  releaseDate: {
    month: "May",
    day: "27",
    year: "2022",
  },
};

document.querySelector(".title-js span").innerHTML = movies.title;
document.querySelector(".genre-js span").innerHTML = movies.genre;
document.querySelector(".runningTime-js span").innerHTML = movies.runningTime;
document.querySelector(".language-js span").innerHTML = movies.language;
document.querySelector(".country-js span").innerHTML = movies.country;
document.querySelector("#movieImg").setAttribute("src", movies.imgUrl);
document.querySelector(".releaseDate-js span").innerHTML = `${movies.releaseDate.month} ${movies.releaseDate.day}, ${movies.releaseDate.year}`;
