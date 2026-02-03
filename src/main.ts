import type { Movie, MovieResponse } from "./types.js";

const form = document.getElementById("formSearch") as HTMLFormElement;
const input = document.getElementById("formInput") as HTMLInputElement;
const container = document.getElementById("resultContainer") as HTMLElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  searchMovies(inputValue);
});

async function searchMovies(query: string) {
  const apiRequest = `https://www.omdbapi.com/?s=${query}&apikey=d16bc177`;

  const response = await fetch(apiRequest);
  const data: MovieResponse = await response.json();

  console.log(data);
  if (data.Response === "True") {
    console.log("Filme trouvé : " + data.Response);
    renderMovies(data.Search!);
  }
}

function renderMovies(movies: Movie[]) {
  container.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movieCard");

    movieCard.innerHTML = `
    <img src=${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}" alt="${movie.Title}"/>
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>`;

    container.appendChild(movieCard);
  });
}

searchMovies("Action");
