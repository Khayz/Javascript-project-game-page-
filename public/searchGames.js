const searchGame = document.querySelector(".searchGame");
const searchedGames = document.querySelector(".searchedGames");
const gameNameArray = [];

const getData = async () => {
  try {
    console.time();
    const resolveData = await fetch("games.json");
    const data = await resolveData.json();
    const dataArray = data.map(e => e.results);
    dataArray.map(e => e.map(c => gameNameArray.push(c)));
    const newGameNameArray = [...new Set(gameNameArray)];
    eventSearchGame(newGameNameArray);
    console.timeEnd();
  } catch (error) {
    console.error({ message: error });
  }
};

const eventSearchGame = data => {
  searchGame.addEventListener("keyup", event => {
    printName(event, data);
  });
};

const printName = (event, data) => {
  const gameArray = [];
  data.map(e => {
    const inputValue = event.target.value;
    const nameOfGame = e.name;
    const regExpName = RegExp(inputValue, "gi");
    const findGame = regExpName.test(nameOfGame);
    findGame && inputValue
      ? gameArray.push(
          `<div class='games'><img src='${e.background_image}'></img><p>${nameOfGame}</p></div>`
        )
      : "";
  });
  const newGameArray = [...new Set(gameArray)];
  searchedGames.innerHTML = newGameArray.join("");
};

getData();
