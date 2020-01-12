const krabot = document.querySelector(".krabot");
const initBot = document.querySelector(".initBot");
const botTitle = document.querySelector(".krabotTitle");
const gamesByBot = document.querySelector(".gamesByBot");

const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

const dataNameArray = [];
const gameArray = [];
let platform;
let genre;

initBot.addEventListener("click", () => {
  initBot.style.display = "none";
  platformAnswers();
});

const platformAnswers = () => {
  botTitle.textContent = `Selecciona tu plataforma de videojuegos preferida.`;
  answer1.textContent = `Playstation4`;
  answer2.textContent = `Xbox One`;
  answer3.textContent = `Steam`;
  answer4.textContent = `Nintendo`;
  firstEventAnswers(answer1);
  firstEventAnswers(answer2);
  firstEventAnswers(answer3);
  firstEventAnswers(answer4);
};

const firstEventAnswers = answer => {
  answer.addEventListener("click", () => {
    if (answer.textContent == "Playstation4") {
      platform = answer.textContent;
      genereAnswers();
    }
    if (answer.textContent == "Xbox One") {
      platform = answer.textContent;
      genereAnswers();
    }
    if (answer.textContent == "Steam") {
      platform = answer.textContent;
      genereAnswers();
    }
    if (answer.textContent == "Nintendo") {
      platform = answer.textContent;
      genereAnswers();
    }
  });
};

const genereAnswers = () => {
  botTitle.textContent = `Que genero de juegos te gustan mas?`;
  answer1.textContent = `Action`;
  answer2.textContent = `RPG`;
  answer3.textContent = `Shooter`;
  answer4.textContent = `Aventure`;
  secondEventAnswers(answer1);
  secondEventAnswers(answer2);
  secondEventAnswers(answer3);
  secondEventAnswers(answer4);
};

const secondEventAnswers = answer => {
  answer.addEventListener("click", () => {
    if (answer.textContent == "Action") {
      genre = answer.textContent;
      finalResult();
    }
    if (answer.textContent == "RPG") {
      genre = answer.textContent;
      finalResult();
    }
    if (answer.textContent == "Shooter") {
      genre = answer.textContent;
      finalResult();
    }
    if (answer.textContent == "Aventure") {
      genre = answer.textContent;
      finalResult();
    }
  });
};

const finalResult = async () => {
  botTitle.textContent = `Este fue el resultado de de la busqueda con ayuda!`;
  answer1.textContent = "";
  answer2.textContent = "";
  answer3.textContent = "";
  answer4.textContent = "";

  try {
    console.time();
    const resolveData = await fetch("games.json");
    const data = await resolveData.json();
    const dataArray = data.map(e => e.results);
    dataArray.map(e => e.map(c => dataNameArray.push(c)));
    const newGameNameArray = [...new Set(dataNameArray)];
    printGames(newGameNameArray);
    console.timeEnd();
  } catch (error) {
    console.error({ message: error });
  }
};

const printGames = newGameNameArray => {
  console.log(newGameNameArray);
  newGameNameArray.forEach(newGame => {
    if (
      newGame.platforms.map(e => e.platform.name == platform) &&
      newGame.genres.map(e => e.name == genre)
    ) {
      if (gameArray.length < 10) {
        gameArray.push(
          `<div class='botGames'><img src='${newGame.background_image}'></img><p>${newGame.name}</p><p>Juego Completo</p></div>`
        );
      }
    }
    gamesByBot.innerHTML = gameArray.join("");
  });
  console.log({ platform, genre });
};
