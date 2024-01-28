// Every collection will have there own schema file for products here
// is products 

// Connecting the API with the server via Moongoose

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-comm')

const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String,
    course: String,
    marks: Number
})

module.exports = mongoose.model('products', schema)