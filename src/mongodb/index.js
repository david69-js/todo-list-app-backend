const mongoose = require('mongoose');
const db_URI = process.env.DB_URI

const dbConnect = () =>{
    mongoose.connect(db_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}
module.exports = dbConnect;