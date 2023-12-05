import app from './src/app.js'
import conexao from './infra/conexao.js'

const port = 3000

// Fazer a conexao
conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Conexão efetuada com sucesso!")
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
})


