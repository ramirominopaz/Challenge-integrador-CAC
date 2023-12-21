const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
     return next();
    }
  
    return res.redirect('/auth/login');
  }
  
  module.exports = {
    isLogged
  }