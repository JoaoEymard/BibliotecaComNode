const {Router} = require('express');
const knex = require('../database/db_config')


const rotas = Router();

rotas.get('/teste',(req,res)=>{
    return res.json({
        mensagem:"hello"
    })
});

/**
 * Rota para pegar uma postagem, baseada no ID
 */
rotas.get('/postagem/:id', async (req,res) => {
    try {
        
        // Usa o knex para fazer select no banco que já está conectado.
        const rows = await knex
            .select('*')
            .from('table')
            .where(req.params); // Passa o objeto params por parametro no where
    
        // Retorna a requisição com sucesso
        return res.status(200).json(rows);

    } catch (error) {
        // Se tiver algum erro durante a execução do código acima, envia a msg do erro para o client
        res.status(500).json({ message: error.message })
    }
})

module.exports = rotas;
