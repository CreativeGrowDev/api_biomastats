const { buscarTodos } = require('../controllers/CreativeController');
const db = require('../db');
module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM clientes',(error,results)=>{
                if(error){
                    rejeitado(error);
                }else{
                    aceito(results);
                }
            });
        });
    },
    buscarPorId: (id) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM clientes WHERE id =?',[id],(error,results)=>{
                if(error){
                    rejeitado(error);
                }else{
                    aceito(results);
                }
            });
        });
    },
};