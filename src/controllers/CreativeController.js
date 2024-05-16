const CreativeService = require('../services/CreativeService');

module.exports = {
    logsAll: async (req,res)=> {
        let json = {error: '', result:[]};
        let logs = await CreativeService.logsAll();

        for(let i in logs){
            json.result.push({
                id: logs[i].id,
                url: logs[i].url,
                service: logs[i].service,
                created_at: logs[i].created_at,
                updated_at: logs[i].updated_at,
                ip: logs[i].ip,
                user_agent: logs[i].user_agent,
                referer: logs[i].referer,              
            });
        }
        res.json(json);

    },
    buscarReferer: async (req, res)=>{
        let json = {error: '', result:[]};
        let logs = await CreativeService.buscarReferer(req.params.referer);

        if (logs){
            json.result = logs;
        }
        res.json(json);
    },
    
    create: async (req, res)=>{
        let json = {error: '', result:{}};

        let url = req.body.url;
        let user_agent = req.body.user_agent;
        let referer = req.body.referer;
        let ip = req.body.ip;
        let service = req.body.service;
        let created_at = req.body.created_at;

        if (url && user_agent && referer && ip && service && created_at){
            let logId = await CreativeService.create(url, user_agent,referer,ip,service,created_at);
            json.result = {
                id: logId,
                url: url,
                user_agent: user_agent,
                referer: referer,
                ip: ip,
                service: service,
                created_at: created_at,
                updated_at: created_at,
            };
        }else{
            json.error = 'Dados inválidos';
        }
        res.json(json);
    },

    
}