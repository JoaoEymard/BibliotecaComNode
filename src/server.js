const express = require('express');
const rotas = require('./routes/teste');


const app = express()

app.use(express.json());

app.use('/',rotas);

app.listen(8080,()=>{
    console.log('rodando')
})