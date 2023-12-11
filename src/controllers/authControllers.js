const path = require('path')

module.exports = {
 
    login:(req, res)=> {
        console.log('Estamos en login') 
        res.render(path.resolve(__dirname, '../views/pages/admin/login'), {
            view: {
               title: "Login | Funkoshop"
           }
       })
    },

    loginPost:(req, res)=> {
        console.log('Se hizo un Post en login') 
        res.send('Esta es la pagina de login')
    },

    register:(req, res)=> {
        console.log('Estamos en register') 
        res.render(path.resolve(__dirname, '../views/pages/admin/register'), {
            view: {
               title: "Register | Funkoshop"
           }
       })
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