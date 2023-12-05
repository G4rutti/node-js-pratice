import express from 'express'
import selecaoController from './app/controllers/selecaoController.js'

const app = express()

// O express começará a ler os req.body no formato de json
app.use(express.json())

//Rotas
app.post('/selecoes', selecaoController.store)
app.get('/selecoes', selecaoController.index)
app.get('/selecoes/:id', selecaoController.show)
app.put('/selecoes/:id', selecaoController.update)
app.delete('/selecoes/:id', selecaoController.delete)

export default app
