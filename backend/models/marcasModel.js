var pool = require('./bd');

async function getMarcas() {
    try {
        var query = 'SELECT marcaid, Marca FROM integrador.marcas';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getMarcas}