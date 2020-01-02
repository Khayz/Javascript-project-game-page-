const questionNum = 0;													// keep count of question, used for IF condition.
const question = '<h1>Hola, Puedo buscar por ti, titulos de tu preferencia';				  // first question

const output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() {
  const input = document.getElementById("input").value;
  console.log(input);

  if (questionNum == 0) {
    output.innerHTML = '<h1>Perfecto buscare.. ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>Generos de tu agrado?</h1>';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
  }

  else if (questionNum == 1) {
    output.innerHTML = '<h1>Perfecto buscare titulos de ' + input + '</h1>';
    document.getElementById("input").value = "";
    question = '<h1>Filtre estos resultados para ti...</h1>';
    setTimeout(timedQuestion, 2000);
  }

}

function timedQuestion() {
  output.innerHTML = question;
  document.getElementById("input").value = "";
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function (e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});

document.getElementById("#contenido").addEventListener("onkeypress", bar)

const contenido = document.querySelector("#contenido")
async function traer() {
  const resolveData = await fetch('https://api.rawg.io/api/genres')
  const data = resolveData.json()
  console.log(data)
  contenido.innerHTML = `
    <img src="${searc.genres['0'].picture.large}" width = "300px" class="img-fluid">`
}