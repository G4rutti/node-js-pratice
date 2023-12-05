import SelecaoRepository from "../repositories/selecaoRepository.js"

class SelecaoController{
    // Lista toda tabela
    async index (req, res){
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }
    // Lista por Id
    async show(req, res){
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }
    // Cria dados
    async store(req,res){
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
    }
    // Atualiza dado
    async update(req,res){
        const selecao = req.body
        const id = req.params.id
        const row = await SelecaoRepository.update(selecao,id)
        res.json(row)
    }
    // Deleta dados
    async delete(req,res){
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }
}

export default new SelecaoController