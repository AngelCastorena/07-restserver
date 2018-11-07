const express = require('express');

const fs = require('fs');

const path = require('path');

let app = express();

app.get('/imagen/:tipo/:img', (req, res) => {

    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${tipo}/${ img }`);
    console.log(pathImagen);
    if (fs.existsSync(pathImagen)) {
        console.log("object");
        res.sendFile(pathImagen);
    } else {
        console.log("aa");
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg')
        res.sendFile(noImagePath);
    }



})











module.exports = app;