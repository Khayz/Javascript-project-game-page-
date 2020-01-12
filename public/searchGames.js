import getData from "./fetchData.js";

const searchGame = document.querySelector(".searchGame");
const searchedGames = document.querySelector(".searchedGames");

function filterResults(data) {
  console.log("data: ", data);
  return data.map(e => e.results);
}

const arrayWithNoRepetedValues = array => {
  return [...new Set(array)];
};

const printName = (event, data) => {
  return data.map(e =>
    e.map(e => {
      if (RegExp(event.target.value, "gi").test(e.name) && event.target.value) {
        return `<div class='filteredGames'><img src='${e.background_image}'>
        </img><p class='gameTitle'>${e.name}</p><p class='gameSubtitle'>Juego Completo</p></div>`;
      } else {
        return " ";
      }
    })
  );
};

const innerDataToSearchGames = (gameArray, searchedGames) => {
  // const newarray = [...new Set(gameArray)];
  // console.log(
  //   "Set Array: ",
  //   newarray.map(value => value.filter(newVal => !!newVal))
  // );

  return gameArray
    ? (searchedGames.innerHTML = [...new Set(gameArray)].map(value =>
        value.filter(newVal => !!newVal).join("")
      ))
    : " ";
};

searchGame.addEventListener("keyup", async event => {
  innerDataToSearchGames(
    printName(event, arrayWithNoRepetedValues(filterResults(await getData()))),
    searchedGames
  );
});
