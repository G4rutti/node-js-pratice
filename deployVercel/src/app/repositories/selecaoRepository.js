import {consulta} from "../database/conexao.js"

class SelecaoRepository{
    // CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, "Não conseguimos criar!")

    }
    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, "Não foi possível listar!")

    }
    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, "Não foi possível achar!")

    }
    update(selecao,id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], "Não foi possível achar!")

    }
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, "Não foi possível deletar!")
    }
}

export default new SelecaoRepository