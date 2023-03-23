const { check } = require('express-validator');
const validateResults = require('../untils/handleValidators');
const validatorCreateItem =[
    check("title").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("state").exists().notEmpty(),
    check("color").exists().notEmpty(),
    check("favorite").exists().notEmpty(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]

module.exports = validatorCreateItem;