// import express from "express"; // no soportada por express por DEFAULT
const express = require("express");

// crear un app de express
const app = express();

// ruta para el home 
app.use("/", (req, res) => {
    res.send("Hola");
});

app.use("/nosotros", (req, res) => {
    res.send("Hola");
});

app.listen(3000);