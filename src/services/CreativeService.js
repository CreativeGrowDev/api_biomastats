//const { buscarTodos, create } = require('../controllers/CreativeController');
const db = require('../db');

module.exports = {
    logsAll: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM logs', (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceito(results);
                }
            });
        });
    },

    pushlinksAll: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM `all_links`', (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceito(results);
                }
            });
        });
    },

    buscarReferer: (referer) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM logs WHERE referer=?', [referer], (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceito(results);
                }
            });
        });
    },

    buscarLink: (fragment, year) => {
        return new Promise((resolve, reject) => {
            db.query(
                'SELECT * FROM `all_links` WHERE fragment = ? AND year = ?',
                [fragment, year],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    },

    gravarLinkEnviado: (link, requesterIp, requestUrl) => {
        return new Promise((resolve, reject) => {
            const query = `
                INSERT INTO \`sent-links\` (
                    sent_datetime,
                    shareable_link,
                    file_name,
                    storage,
                    status,
                    fragment,
                    year,
                    requester_ip,
                    request_url,
                    collection,
                    data_type,
                    resolution,
                    source
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                new Date(),
                link.shareable_link,
                link.file_name,
                link.storage,
                true,
                link.fragment,
                link.year,
                requesterIp,
                requestUrl,
                link.collection || null,
                link.data_type || null,
                link.resolution || null,
                link.source || null
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

    gravarRespostaApp: (link, requesterIp, request_application) => {
        return new Promise((resolve, reject) => {
            const query = `
                INSERT INTO \`res_app\` (
                    sent_datetime,
                    shareable_link,
                    file_name,
                    storage,
                    was_successful,
                    requester_ip,
                    request_application,
                    collection,
                    data_type,
                    resolution,
                    source
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                new Date(),
                link.shareable_link,
                link.file_name,
                link.storage,
                link.was_successful,
                requesterIp,
                request_application,
                link.collection || null,
                link.data_type || null,
                link.resolution || null,
                link.source || null
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

    create: (url, user_agent, referer, ip, service, created_at) => {
        return new Promise((aceito, rejeitado) => {
            db.query(
                'INSERT INTO logs (url, user_agent, referer, ip, service, created_at) VALUES (?, ?, ?, ?, ?, ?)',
                [url, user_agent, referer, ip, service, created_at],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                    } else {
                        aceito(results.createId);
                    }
                }
            );
        });
    }
};
