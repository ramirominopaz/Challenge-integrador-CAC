const express = require('express');
const server = express();
const mainRoutes = require('./src/routes/mainRoutes.js')    //Aca se importan las rutas del Main
const adminRoutes = require('./src/routes/adminRoutes.js')    //Aca se importan las rutas del Admin
const authRoutes = require('./src/routes/authRoutes.js')    //Aca se importan las rutas del Auth
const shopRoutes = require('./src/routes/shopRoutes.js')    //Aca se importan las rutas del Shop
const path = require('path')
const { initSession } = require('./src/utils/sessions');
require('dotenv').config();
const port = process.env.PORT || 3000


server.set('view engine' , 'ejs');
server.set('views', path.join(__dirname ,'./src/views' ));

app.use(initSession());

app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
  next();
});

server.use(express.static(__dirname + '/public'));
server.use('/', mainRoutes); //Aca se le indica que use las rutas de Main 
server.use('/admin', adminRoutes); //Aca se le indica que use las rutas de Admin
server.use('/auth', authRoutes); //Aca se le indica que use las rutas de Auth
server.use('/shop', shopRoutes); //Aca se le indica que use las rutas de Shop

server.use((req, res, next) => {res.status(404).send('Recurso no encontrado');}); //Aca se manejan los errores

server.use(express.urlencoded());
server.use(express.json());

server.listen(3000, ()=>{
    console.log("Escuchando en el puerto ${port}")
})