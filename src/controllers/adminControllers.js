const path = require('path')
const ItemService = require('../services/itemService');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenseService');

module.exports = {
 
    admin:async (req, res) => {
        const items = await ItemService.getAllItems();
        const { data } = items;
        console.log('Estamos en admin') 
        res.render(path.resolve(__dirname, '../views/pages/admin/admin'), {
            view: {
               title: "Admin | Funkoshop"
            },
            items: data
        });
    },

    create:  async (req, res) =>{
        const { data: categories } = await CategoryService.getAllItemsCategories();
        const { data: licences } = await LicenceService.getAllItemsLicences();
        
        console.log('Estamos en create') 
        res.render(path.resolve(__dirname, '../views/pages/admin/create'), {
          view: {
            title: "Create | Funkoshop"
          },
          categories,
          licences
        });
    },

    createPost:async (req, res) => {
      try{
        const item = req.body;
        const files = req.files;
        await ItemService.create(item, files);
        console.log(req.body);
        res.redirect('/admin');
      } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear un nuevo producto');
      }
    },

    
    edit:  async (req, res) => {
        const id = req.params.id;
        const { data: categories } = await CategoryService.getAllItemsCategories();
        const { data: licences } = await LicenceService.getAllItemsLicences();
        const { data } = await ItemService.getItem(id);
        console.log('Estamos en edit') 
        res.render(path.resolve(__dirname, '../views/pages/admin/edit'), {
          view: {
            title: `Edit | Funkoshop` 
          },
          item: data[0],
          categories,
          licences
        });
    },

    editPut:  async (req, res) => {
        const id = req.params.id;
        const item = req.body;
    
        await ItemService.edit(item, id);
        res.redirect('/admin');
    },

    delete: async (req, res) => {
        const id = req.params.id;
    
        await ItemService.delete(id);
        res.redirect('/admin');
        },
    };