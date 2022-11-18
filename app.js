
const express = require('express')
const app = express();

// Para cargar las variables de entorno
require('dotenv').config();

//const port = 3000;
const port = process.env.PORT;
const hbs = require('hbs');

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estático
app.use( express.static('public')); // Esto es un middleware


// Cuando le pida a handlebars que renderice una vista la va a buscar en \views
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Manuel Casas',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Manuel Casas (Generic)',
    titulo: 'Curso de Node (Generic)'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Manuel Casas (elements)',
    titulo: 'Curso de Node (elements)'
  });
})

/*
app.get('/', (req, res) => {
  res.send('Hola Mundo');
})
*/




app.listen(port, () => {
  console.log(`Ejemplo escuhando en http://localhost:${port}/`)
})


/*
app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
})
*/
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})


