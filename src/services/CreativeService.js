const { buscarTodos, create } = require('../controllers/CreativeController');
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
    },
    buscarReferer: (referer) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM logs WHERE referer=?',[referer],(error,results)=>{
                if(error){
                    rejeitado(error);
                }else{
                    aceito(results);
                }
            });
        });
    },

    create: (url, user_agent,referer,ip,service,created_at) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('INSERT INTO logs (url, user_agent,referer,ip,service,created_at) VALUES (?,?,?,?,?,?)',
            [url, user_agent,referer,ip,service,created_at],(error,results)=>{
                if(error){
                    rejeitado(error);
                }else{
                    aceito(results.createId);
                }
            });
        });
    }

    
};