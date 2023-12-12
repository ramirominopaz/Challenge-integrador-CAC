const path = require('path')

const userCredentials = {
    email: 'usuario@gmail.com',
    password: '1234'
  }

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
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;
    
        req.session.isLogged = emailValidation && passwordValidation ? true : false;
    
        if (req.session.isLogged) {
          res.locals.isLogged = true;
          return res.redirect('/admin');
        }
    
        return res.status(401).send('Credenciales inválidas');
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
        req.session.isLogged = false;
        res.send('Sesión finalizada con éxito.')
      },

}