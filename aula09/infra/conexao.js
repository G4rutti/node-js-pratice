import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "davi123",
    database: "dbcopadomundo"
})

conexao.connect()

export default conexao