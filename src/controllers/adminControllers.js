const path = require('path')

module.exports = {
 
    admin:(req, res)=> {
        console.log('Estamos en admin') 
        res.render(path.resolve(__dirname, '../views/pages/admin/admin'), {
            view: {
               title: "Admin | Funkoshop"
           }
       })
    },

    create:(req, res)=> {
        console.log('Estamos en create') 
        res.render(path.resolve(__dirname, '../views/pages/admin/create'), {
            view: {
               title: "Create | Funkoshop"
           }
       })
    },

    createPost:(req, res)=> {
        console.log('Se hizo un Post en create') 
        res.send('Esta es la pagina de create')
    },

    edit:(req, res)=> {
        console.log('Estamos en edit') 
        res.render(path.resolve(__dirname, '../views/pages/admin/edit'), {
            view: {
               title: "Edit | Funkoshop"
           }
       })
    },

    editPut:(req, res)=> {
        console.log('Se hizo un Put en edit') 
        res.send('Esta es la pagina de login')
    },

    delete:(req, res)=> {
        console.log('Estamos en delete') 
        res.send('Esta es la pagina de delete')
    },


}