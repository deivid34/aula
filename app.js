const express = require('express')

const app = express()

app.use(express.json())
app.prependOnceListener(3333, () =>{
    console.log('rodando na porta 3333')
})