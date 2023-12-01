const path = require('path')

module.exports = {
 
    home:(req, res)=> {
        console.log('Estamos en home') 
        res.send('Esta es la pagina de home')
    },

    contact:(req, res)=> {
        console.log('Estamos en contact') 
        res.send('Esta es la pagina de contacto')
    },

    about:(req, res)=> {
        console.log('Estamos en about') 
        res.send('Esta es la pagina de about')
    },

    faqs:(req, res)=> {
        console.log('Estamos en faqs') 
        res.send('Esta es la pagina de faqs')
    },


}