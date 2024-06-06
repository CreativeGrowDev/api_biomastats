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

    pushlinksAll: async (req,res)=> {
        let json = {error: '', result:[]};
        let links = await CreativeService.pushlinksAll();

        for(let i in links){
            json.result.push({
                id: links[i].id,
                file_name: links[i].file_name,
                fragment: links[i].fragment,
                year: links[i].year,
                info_id: links[i].info_id,
                shareable_link: links[i].shareable_link,
                md5_checksum: links[i].md5_checksum,
                source: links[i].source,   
                type: links[i].type,
                version: links[i].version,
                storage: links[i].storage,          
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

    buscarLink: async (req, res) => {
        let json = { error: '', result: [] };
        let fragment = req.body.fragment;
        let year = req.body.year;

        if (!fragment || !year) {
            json.error = 'Missing fragment or year parameter';
            return res.status(400).json(json);
        }

        try {
            let links = await CreativeService.buscarLink(fragment, year);
            
            if (links && links.length > 0) {
                // Selecionar um link aleatório da lista
                const randomIndex = Math.floor(Math.random() * links.length);
                const selectedLink = links[randomIndex];
                json.result = selectedLink;

                // Gravar o link selecionado na tabela 'sent-links'
                await CreativeService.gravarLinkEnviado(selectedLink);

                return res.status(200).json(json);
            } else {
                json.error = 'No links found';
                return res.status(404).json(json); // 404 Not Found
            }
        } catch (error) {
            json.error = 'Error fetching link: ' + error.message;
            return res.status(500).json(json); // 500 Internal Server Error
        }
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