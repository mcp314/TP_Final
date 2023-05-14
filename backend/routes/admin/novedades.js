var express = require('express');
var router = express.Router();
var novedadesModel=require('./../../models/novedadesModel');

router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', { layout: '/admin/layout',
    persona: req.session.nombre, novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', { layout: '/admin/layout',
    });
});


router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.prendaid !="" && req.body.marcaid !="" && req.body.talle !="" && req.body.descripcion !="" && req.body.precio !="" && req.body.estado !=""){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
    } else {
        res.render( 'admin/agregar', {
            layout:'admin/layout',
            error: true, message: 'Todos los campos son requeridos'
        })
    }
} catch (error) {
    console.log(error)
    res.render('admin/agregar',{
    layout: 'admin/layout',
    error: true, message: 'No se cargo la novedad'  
    });
}
});

router.get('/eliminar/:id',async (req ,res, next)=> {
    var id = req.params.id;
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades')
});

router.get('/modificar/:id',async (req ,res, next)=> {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    console.log(novedad);
    res.render('admin/modificar',{
        layout: 'admin/layout', novedad
    });
});

router.post('/modificar', async (req ,res, next)=> {
    try {
        let obj = {
            id: req.body.id,
            prendaid: req.body.prendaid,
            marcaid: req.body.marcaid,
            talle: req.body.talle,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            estado: req.body.estado
        }
        console.log(obj)
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    }
    catch (error) {
        console.log(error)
        res.render('admin/modificar',{
            layout: 'admin/layout',
            error: true, message: 'No se modificó la novedad' 
        })
    }
});

module.exports = router;