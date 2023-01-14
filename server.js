const mysql = require("mysql");
const express = require("express");
//pasar a formato json los datos de db
const bodyParser = require("body-parser");
//conexión a la base de datos
const mysqlConexion = require("./conexion");
// Ruta para la extracción de datos
const departamentos = require("./routers/tbdepartamentos");
// const pedidos = require("./routers/pedidos");
const { application } = require("express");

var app = express();
app.use(bodyParser.json());
app.use("/departamentos", departamentos);
// app.use("/pedidos", pedidos);
app.listen(3000);