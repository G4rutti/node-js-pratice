import express from 'express'
const app = express()

// O express começará a ler os req.body no formato de json
app.use(express.json())

// mock
const selecoes = [
    {id: 1, selecao: "Brasil", grupo: "G"},
    {id: 2, selecao: "Suiça", grupo: "G"},
    {id: 3, selecao: "Sérvia", grupo: "G"},
    {id: 4, selecao: "Camarões", grupo: "G"},
]

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id) 
}

// pegar a posição no array por id
function buscarIdSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) =>{
    console.log(req.params)
    res.status(200).json(buscarSelecaoPorId(req.params.id))
})


app.post('/selecoes', (req,res) =>{
    selecoes.push(req.body)
    res.status(201).send("Seleção cadastrada com sucesso!")
})

app.delete('/selecoes/:id', (req,res) =>{
    let index = buscarIdSelecao(req.params.id)
    selecoes.slice(index, 1)
    res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)
})

export default app
