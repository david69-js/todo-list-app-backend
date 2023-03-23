const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema(
    {
        title:{
            type: String
        },
        description:{
            type: String
        },
        state:{
            type: Boolean
        },
        color:{
            type: String
        },
        favorite:{
            type: Boolean
        }
    },{
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Todo', TodoSchema)