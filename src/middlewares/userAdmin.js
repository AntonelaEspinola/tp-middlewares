let administradores = ['Ada','Greta','Vim','Tim'];

function administrador(req, res, next) {
  administradores.forEach(administrador => {
    if (req.query.administrador === administrador) {
        console.log(req.query.administrador);
      return res.render(`Hola admin ${administrador}`);
    } else {
      return res.send("No tienes los privilegios para ingresar");
    }
   
  });
next()
}

module.exports = administrador;