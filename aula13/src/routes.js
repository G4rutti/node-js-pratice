import { Router } from "express"
import selecaoController from "./app/controllers/selecaoController.js"

const router = Router()

//Rotas
router.post('/selecoes', selecaoController.store)
router.get('/selecoes', selecaoController.index)
router.get('/selecoes/:id', selecaoController.show)
router.put('/selecoes/:id', selecaoController.update)
router.delete('/selecoes/:id', selecaoController.delete)

export default router