const krabot = document.querySelector(".krabot");
const initBot = document.querySelector(".initBot");
const botTitle = document.querySelector(".krabotTitle");

const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

const dataNameArray = [];

initBot.addEventListener("click", () => {
  initBot.style.display = "none";
  platformAnswers();
});

const platformAnswers = () => {
  botTitle.textContent = `Que plataforma de juegos usas mas?`;
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
      genereAnswers();
    }
    if (answer.textContent == "Xbox One") {
      genereAnswers();
    }
    if (answer.textContent == "Steam") {
      genereAnswers();
    }
    if (answer.textContent == "Nintendo") {
      genereAnswers();
    }
  });
};

const genereAnswers = () => {
  botTitle.textContent = `Que genero de juegos te gustan mas?`;
  answer1.textContent = `Action`;
  answer2.textContent = `Fight`;
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
      finalResult();
    }
    if (answer.textContent == "Fight") {
      finalResult();
    }
    if (answer.textContent == "Shooter") {
      finalResult();
    }
    if (answer.textContent == "Aventure") {
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
    console.log(newGameNameArray);
    console.timeEnd();
  } catch (error) {
    console.error({ message: error });
  }
};
