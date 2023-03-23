require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./mongodb/index');
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000;

app.use('/api', require('./routers'))

app.listen(port, () =>{
    console.log(`The backend app is running on ${port}`)
})
dbConnect();