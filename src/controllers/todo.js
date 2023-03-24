const { TodoModel } = require('../models')
/**
 * Get one item 
 *  @param {*} req 
 *  @param {*} res
 */
const getItem = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await TodoModel.findById(id);
        if (!data) return res.status(404).send({ message: 'Item not found' }); // 404 if item not found
           return res.status(200).send({ data }); // 200 for successful retrieval
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' }); // 500 for internal server errors
    }
}

/**
 * Get all items 
 *  @param {*} req 
 *  @param {*} res
 */

const getItems = async (req, res) => {
    try {
        const data = await TodoModel.find({});
        if (!data || data.length === 0) return res.status(404).send({ message: 'No items found' }); // 404 if no items found
           return res.status(200).send({ data }); // 200 for successful retrieval of items
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' }); // 500 for internal server errors
    }
}

/**
 * Update one item 
 *  @param {*} req 
 *  @param {*} res
 */
const updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = req.body;
        const todoUpdate = await TodoModel.findByIdAndUpdate(id, todo, { new: true });
        if (!todoUpdate) return res.status(404).send({ message: 'Item not found' }); // 404 if item not found
           return res.status(200).send({ data: todoUpdate }); // 200 for successful update
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' }); // 500 for internal server errors
    }
}
/**
 * Create one item 
 *  @param {*} req 
 *  @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const data = await TodoModel.create(req.body);
        return res.status(201).send({ data }); // 201 for successful creation
    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') return res.status(400).send({ message: error.message }); // 400 for validation errors
            return res.status(500).send({ message: 'Internal server error' }); // 500 for other errors
        
    }
}
/**
 * Delete one item 
 *  @param {*} req 
 *  @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedDoc = await TodoModel.findOneAndDelete({ _id: id });
        if (!deletedDoc) return res.status(404).send({ message: 'Item not found' }); // 404 if item not found
           return res.status(200).send({ message: 'Item successfully deleted' }); // 200 for successful deletion    
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' }); // 500 for internal server errors
    }
}


module.exports = {getItem, getItems, updateItem, createItem, deleteItem}