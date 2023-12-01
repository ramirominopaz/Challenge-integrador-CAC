const path = require('path')

module.exports = {
 
    login:(req, res)=> {
        console.log('Estamos en login') 
        res.send('Esta es la pagina de login')
    },

    loginPost:(req, res)=> {
        console.log('Se hizo un Post en login') 
        res.send('Esta es la pagina de login')
    },

    register:(req, res)=> {
        console.log('Estamos en register') 
        res.send('Esta es la pagina de register')
    },

    registerPost:(req, res)=> {
        console.log('Se hizo un Post en register') 
        res.send('Esta es la pagina de register')
    },

    logout:(req, res)=> {
        console.log('Estamos en logout') 
        res.send('Esta es la pagina de logout')
    },


}