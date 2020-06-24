const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/imagenes'));
//registrar la carpeta parciales
hbs.registerPartials(__dirname + '/views/parciales')


app.set('view engine', 'hbs');
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "AlExAnder",
        pagina: 'home'
    });
});
app.get('/about', function(req, res) {
    res.render('about', {

        pagina: 'about'
    });
});

/*
app.get('/', function(req, res) {
    //res.send('Hello World');
    let content = {
        nombre: "Rodrigo",
        edad: 37,
        url: req.url
    }
    res.send(content);
})

app.get('/about', function(req, res) {
    res.send('Este es mi primer sitio web con Express + Node.js');
})
*/


app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})