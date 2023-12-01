const path = require('path')

module.exports = {
 
    admin:(req, res)=> {
        console.log('Estamos en admin') 
        res.send('Esta es la pagina de admin')
    },

    create:(req, res)=> {
        console.log('Estamos en create') 
        res.send('Esta es la pagina de create')
    },

    createPost:(req, res)=> {
        console.log('Se hizo un Post en create') 
        res.send('Esta es la pagina de create')
    },

    edit:(req, res)=> {
        console.log('Estamos en edit') 
        res.send('Esta es la pagina de edit')
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