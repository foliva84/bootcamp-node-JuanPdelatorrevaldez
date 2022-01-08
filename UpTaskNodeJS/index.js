// import express from "express"; // no soportada por express por DEFAULT
const express = require("express");
const routes = require("./routes");

// crear un app de express
const app = express();

app.use("/", routes());

app.listen(3000);