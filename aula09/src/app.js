import express from 'express'
import conexao from "../infra/conexao.js"

const app = express()

// O express começará a ler os req.body no formato de json
app.use(express.json())


function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id) 
}

// pegar a posição no array por id
function buscarIdSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.post('/selecoes', (req,res) =>{
    // selecoes.push(req.body)
    // res.status(201).send("Seleção cadastrada com sucesso!")
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao ,(error, result) => {
        if(error){
            res.status(400).json({"erro":error})
        }else{
            res.status(201).json(result)
        }
    })
})


//Rotas
app.get('/selecoes', (req, res) =>{
    // res.status(200).send(selecoes)
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (error, result) => {
        if(error){
            res.status(404).json({"erro":error})
        }else{
            res.status(200).json(result)
        }
    })
})

app.get('/selecoes/:id', (req, res) =>{
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id ,(error, result) => {
        if(error){
            res.status(404).json({"erro":error})
        }else{
            res.status(200).json(result)
        }
    })
    // console.log(req.params)
    // res.status(200).json(buscarSelecaoPorId(req.params.id))
})

app.put('/selecoes/:id', (req,res) =>{
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao,id] ,(error, result) => {
        if(error){
            res.status(400).json({"erro":error})
        }else{
            res.status(201).json(result)
        }
    })
    // let index = buscarIdSelecao(req.params.id)
    // selecoes[index].selecao = req.body.selecao
    // selecoes[index].grupo = req.body.grupo
    // res.json(selecoes)
})

app.delete('/selecoes/:id', (req,res) =>{
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id ,(error, result) => {
        if(error){
            res.status(404).json({"erro":error})
        }else{
            res.status(200).json(result)
        }
    })
    // let index = buscarIdSelecao(req.params.id)
    // selecoes.slice(index, 1)
    // res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)
})



export default app
