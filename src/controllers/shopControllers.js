const path = require('path')

module.exports = {
 
    shop:(req, res)=> {
        console.log('Estamos en home') 
        res.send('Esta es la pagina de home')
    },

    item:(req, res)=> {
        console.log('Estamos en item') 
        res.send('Esta es la pagina de item')
    },

    itemPost:(req, res)=> {
        console.log('Se hizo un Post en item') 
        res.send('Esta es la pagina de cart')
    },

    cart:(req, res)=> {
        console.log('Estamos en cart') 
        res.send('Esta es la pagina de cart')
    },

    cartPost:(req, res)=> {
        console.log('Se hizo un Post en cart') 
        res.send('Esta es la pagina de cart')
    },


}