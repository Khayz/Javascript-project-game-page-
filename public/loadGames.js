// @ts-check
// SECTION Get DATA--------------------------------
const getGames = async (pageNumber = 1) => {
  const games = await fetch(`https://api.rawg.io/api/games?page=${pageNumber}`);
  const actualPage = document.querySelector(`.page${pageNumber}`);
  const allPages = document.querySelectorAll(".links a");
  allPages.forEach(a => {
    a.style.color = "#c2c2c2";
    a.style.textDecoration = "none";
  });
  actualPage.style.color = "#fff";
  actualPage.style.textDecoration = "underline";
  const data = await games.json();
  console.log(data.results);
  const dataGame = data.results.map(
    e =>
      ` <div class='gameAndImage'> <div class='imageGame' style="background-image: url('${e.background_image}')"></div> <div class='nameGame' > <h1>${e.name}</h1> <div>
       <h2>Juego Completo</h2> <h2>${e.platforms[0].platform.name} and more... </h2> 
       </div> </div> </div> `
  );
  document.querySelector(".searchValues").innerHTML = dataGame.join("  ");
};

getGames();

const selectLink = nameLink => {
  return document.querySelectorAll(nameLink);
};

const eventOfLink = links => {
  links.forEach(link => {
    link.addEventListener("click", event => {
      getGames(link.textContent);
    });
  });
};

eventOfLink(selectLink(".links a"));

//PRUEBA DE LA BARRA DE BUSQUEDA (Aqui funciona...)
$(document).ready(function () {
  $("input").keydown(function () {
    $("input").css("background-color", "yellow");
  });
  $("input").keyup(function () {
    $("input").css("background-color", "pink");
  });
});
