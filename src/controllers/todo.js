const { TodoModel } = require('../models')
/**
 * Get one item 
 *  @param {*} req 
 *  @param {*} res
 */
const getItem = (req, res) =>{


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
const updateItem = (req, res) =>{

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