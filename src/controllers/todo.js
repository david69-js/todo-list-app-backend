const { TodoModel } = require('../models')
/**
 * Get one item 
 *  @param {*} req 
 *  @param {*} res
 */
const getItem = async (req, res) =>{
    const id = req.params.id
    const todo = await TodoModel.findById(id)
    res.json(todo)
}
/**
 * Get all items 
 *  @param {*} req 
 *  @param {*} res
 */

const getItems = async (req, res) =>{
    const data = await TodoModel.find({})
    res.send({data})
}

/**
 * Update one item 
 *  @param {*} req 
 *  @param {*} res
 */
const updateItem = async (req, res) =>{
    const id = req.params.id;
    const todo = req.body;
    const todoUpdate = await TodoModel.findByIdAndUpdate(id,todo)
    res.send(todoUpdate)
}
/**
 * Create one item 
 *  @param {*} req 
 *  @param {*} res
 */
const createItem = async (req, res) =>{
    const {body} = req;
    const data = await TodoModel.create(body)
    res.send({data})
 }
/**
 * Delete one item 
 *  @param {*} req 
 *  @param {*} res
 */
const deleteItem = async (req, res) =>{
    let todoId = req.params.id;
    const deletedDoc = await TodoModel.findOneAndDelete({ _id: todoId });
    res.send({deletedDoc});
}

module.exports = {getItem, getItems, updateItem, createItem, deleteItem}