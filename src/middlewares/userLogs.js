const fs =require ('fs')
const path = require('path');

function  logMidd(req,res,next){
    fs.appendFileSync(path.join(__dirname,'../logs/userLogs.txt'),`El usuario ingreso a la ruta: ${req.url}\n` )
    next()
}

module.exports=logMidd;