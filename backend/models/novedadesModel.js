var pool = require('./bd');

async function getNovedades() {
    try {
        var query = 'SELECT o.id, t.prenda , m.Marca, o.talle, o.descripcion, o.precio, e.estado FROM integrador.ofertas o left join marcas m on o.marcaid = m.marcaid left join tipoprendas t on o.prendaid = t.prendaid  left join estados e on o.estado = e.estadoid order by o.id desc';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function insertNovedad(obj) {
    try {
        var query = 'insert into ofertas set ?';
        var rows = await pool.query(query,[obj]);
        return rows; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById(id) {
    try {
        var query = 'delete from ofertas where id = ?';
        var rows = await pool.query(query,[id]);
        return rows; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getNovedadById(id) {
    var query = 'Select * from ofertas where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj,id) {
    try {
        var query = 'update ofertas set ? where id =?';
        var rows = await pool.query(query,[obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getNovedades,insertNovedad,deleteNovedadById, getNovedadById, modificarNovedadById}