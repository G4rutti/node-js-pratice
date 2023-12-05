import express from 'express'
import router from './routes.js'

const app = express()

// O express começará a ler os req.body no formato de json
app.use(express.json())

// Usar o router
app.use(router)

export default app
