var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById("formSearch");
const input = document.getElementById("formInput");
const container = document.getElementById("resultContainer");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = input.value;
    searchMovies(inputValue);
});
function searchMovies(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiRequest = `https://www.omdbapi.com/?s=${query}&apikey=d16bc177`;
        const response = yield fetch(apiRequest);
        const data = yield response.json();
        console.log(data);
        if (data.Response === "True") {
            console.log("Filme trouvé : " + data.Response);
            renderMovies(data.Search);
        }
    });
}
function renderMovies(movies) {
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
export {};
//# sourceMappingURL=main.js.map