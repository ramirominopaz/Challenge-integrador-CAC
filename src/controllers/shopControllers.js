const path = require('path')

module.exports = {
 
    shop:(req, res)=> {
        console.log('Estamos en home') 
        res.render(path.resolve(__dirname, '../views/pages/shop'), {
            view: {
                title: "Shop | Funkoshop"
              }
        })
    },

    item:(req, res)=> {
        console.log('Estamos en item') 
        res.render(path.resolve(__dirname, '../views/pages/item'), {
             view: {
                title: "Item | Funkoshop"
            }
        })
    },

    itemPost:(req, res)=> {
        console.log('Se hizo un Post en item') 
        res.send('Esta es la pagina de cart')
    },

    cart:(req, res)=> {
        console.log('Estamos en cart') 
        res.render(path.resolve(__dirname, '../views/pages/cart'), {
            view: {
                title: "Cart | Funkoshop"
              }
        })
    },

    cartPost:(req, res)=> {
        console.log('Se hizo un Post en cart') 
        res.send('Esta es la pagina de cart')
    },


}