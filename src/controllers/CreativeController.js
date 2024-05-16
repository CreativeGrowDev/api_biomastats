const CreativeService = require('../services/CreativeService');

module.exports = {
    buscarTodos: async (req,res)=> {
        let json = {error: '', result:[]};
        let clientes = await CreativeService.buscarTodos();

        for(let i in clientes){
            json.result.push({
                id: clientes[i].id,
                nome: clientes[i].nome,
                cpf_cnpj: clientes[i].cpf_cnpj              
            });
        }
        res.json(json);
    },

    buscarPorId: async (req, res) =>{
        let json = {error: '', result:{}};
        let idcliente = req.params.id;
        let cliente = await CreativeService.buscarPorId(idcliente);
        if(cliente){
            json.result = cliente;
        }
        res.json(json);
    }
}