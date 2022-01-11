// import express from "express"; // no soportada por express por DEFAULT
const express = require("express");
const routes = require("./routes");
const path = require("path");

// crear un app de express
const app = express();

// Donde cargar los archivos estáticos
app.use(express.static("public"));

// Habilitar pug
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "./views"));

app.use("/", routes());

app.listen(3000);