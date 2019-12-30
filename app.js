const Express = require("express");
const Users = require("./controllers/games");

//app contendra la instancia creada al momento de invocar Express
const app = Express();

// middlewares y usa Express static que inyecta archivos estaticos al server
app.use(Express.json());
app.use(Express.static("./public"));

// app tiene un metodo set, y este valor se asigna EJS que es la libreria
app.set("view engine", "ejs");

// importamos un controller para que queden modulos mas pequeños
// De esta manera granulamos nuestro codigo
Users(app);

// server listen
app.listen(3000, () => console.log("Server listen in port 3000"));
