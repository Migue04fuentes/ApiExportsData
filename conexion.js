const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_wirtmed",
  multipleStatements: true,
});

mysqlConexion.connect((err) => {
  if (!err) {
    console.log("Conexión a la base de datos exitosa");
  } else {
    console.log("Error al conectar");
  }
});
module.exports = mysqlConexion;