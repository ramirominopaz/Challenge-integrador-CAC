const path = require('path')
const LicenceService = require('../services/licenseService');

module.exports = {
 
    // home:(req, res)=> {
    //     console.log('Estamos en home') 
    //     res.render(path.resolve(__dirname, '../views/index'), {
    //         view: {
    //             title: "Home | Funkoshop"
    //           }
    //     });
    // },

    home: async (req, res) => {
        const licences = await LicenceService.getAllItemsLicences();
        res.render((path.resolve(__dirname, '../views/index')), {
          view: {
            title: "Home | Funkoshop"
          },
          collections: licences.data,
        });
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