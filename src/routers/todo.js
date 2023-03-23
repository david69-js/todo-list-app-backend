const express = require('express');

const router= express.Router();
const {getItem, getItems, createItem, deleteItem, updateItem } = require('../controllers/todo')
//TODO get/post/delete/Put


router.post('/', createItem);
router.delete('/:id', deleteItem);
router.delete('/:id', updateItem);
router.get('/', getItems);


module.exports = router;