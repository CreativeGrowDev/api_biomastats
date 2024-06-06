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

    pushlinksAll: () =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM `all-links`',(error,results)=>{
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

    buscarLink: (fragment, year) =>{
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM `all-links` WHERE fragment = ? AND year = ?', [fragment, year], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    gravarLinkEnviado: (link) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO `sent-links` (sent_datetime, shareable_link, file_name, storage, status) VALUES (?, ?, ?, ?, ?)';
            const values = [
                new Date(),
                link.shareable_link,
                link.file_name,
                link.storage,
                true // Assuming status is true when the link is sent
            ];
    
            db.query(query, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
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