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
    }

    
}