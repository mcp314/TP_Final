var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next){
    let novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedades => {
        if (novedades.imageid) {
            const imagen = cloudinary.url(novedades.imageid,{
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);
});
 

router.post('/contacto', async (req,  res) => {
    const mail = {
        to: 'mcp314@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacta a traves de la web solicitando información a este correo: ${req.body.email} <br> Deja ademas el siguietne comentario: ${req.body.mensaje}<br> Teléfono de contacto: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;