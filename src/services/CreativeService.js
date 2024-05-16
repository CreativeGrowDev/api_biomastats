const { buscarTodos } = require('../controllers/CreativeController');
const db = require('../db');
module.exports = {
    logsAll: () =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM logs',(error,results)=>{
                if(error){
                    rejeitado(error);
                }else{
                    aceito(results);
                }
            });
        });
    }
    
};