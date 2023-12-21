const path = require('path')
const UserService = require('../services/userService');

// const authModel = require('../models/authModel');

// const userCredentials = async () => {
//     return await authModel.getUser();
//   }


// const userCredentials = async ()=>{
//     return await UserService.getAllUser();
// }

const userCredentials = {
  email: "usuario@gmail.com",
  password: "1234"
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

        const email = req.body.mail
        const password = req.body.password
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
      const name = req.body.name
      const lastname = req.body.lastname
      const email = req.body.mail
      const password = req.body.password
      const password_check = req.body.password__check

      if (password == password_check){
        console.log("Verificación correcta")
      } else {
        console.log("La contraseña no coincide")
      }

    },

    registerPost:async (req, res) => {
      const password = req.body.password
      const password_check = req.body.password__check
      if (password == password_check) {
        try{
          const user = req.body;
          await UserService.createUser(user);
          console.log(req.body);
          res.redirect('/login');
        } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear un usuario nuevo');
        }
      } else {
        res.send('Las contraseñas no coinciden')
      }
      
    },


    logout:(req, res)=> {
        req.session.isLogged = false;
        res.redirect('/')
      },

}