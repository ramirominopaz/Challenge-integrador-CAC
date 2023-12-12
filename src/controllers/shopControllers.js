const path = require('path')
const ItemService = require('../services/itemService');

module.exports = {
 
    shop: async (req, res) => {
        const items = await ItemService.getAllItems();
        const { data } = items;
        res.render(path.resolve(__dirname, '../views/pages/shop'),{
          view: {
            title: "Shop | Funkoshop"
          },
          items: data
        });
      },

    item: async (req, res) => {
        const id = req.params.id;
        const item = await ItemService.getItem(id);
        const { data } = item;
    
        if (!data[0]) {
          res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
        }
    
        res.render(path.resolve(__dirname, '../views/pages/item'), {
          view: {
            title: "Item | Funkoshop"
          },
          item: data[0],
          enableGlide: true
        });
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