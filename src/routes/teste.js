const {Router} = require('express');
const kenx = require('../database/db_config')


const rotas = Router();

rotas.get('/teste',(req,res)=>{
    return res.json({
        mensagem:"hello"
    })
});

rotas.post('/postagem/:id',(req,res)=>{
    const {id} = req.params;
    return res.status(200).json(req.body);
   //return res.status(200).json({"idPost":id});
})

module.exports = rotas;