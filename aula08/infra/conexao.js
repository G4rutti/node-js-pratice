import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "davi123",
    database: "dbcopadomundo"
})

export default conexao