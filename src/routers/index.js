const express = require('express');
const fs = require('fs')
const router = express.Router();

const PATH_RT= __dirname;
const removeExtension = (fileName) =>{
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_RT).filter((file) =>{
    const name = removeExtension(file)
    if(name !== 'index') return router.use(`/${name}`, require(`./${file}`));
})


module.exports = router