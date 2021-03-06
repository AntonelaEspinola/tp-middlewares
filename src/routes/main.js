var express =require('express');
var router= express.Router();

const {index,login,register, admin}=require('../controllers/indexController');
const administrador = require('../middlewares/userAdmin');

router.get('/',index);
router.get('/login',login);
router.get('/register',register);

router.get('/admin/:administrador',administrador,admin);

module.exports=router