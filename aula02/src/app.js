const express = require('express')
const app = express()
const port = 3000

// criar rota padrão ou raiz
app.get('/', (req,res) => {
    res.send('Hello world!')
})

// escutar porta 3000
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
 