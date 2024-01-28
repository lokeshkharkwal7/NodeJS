const schema = require('./product.js')

// Using express js 
const express = require('express')
const app = express()
app.use(express.json())
app.post("/", async (req, resp) => {
    // adding the req.body data to the database 
    const info = new schema(req.body)
    const status = await info.save()
    resp.send(status)
    console.log(req.body)
})

app.post("/find", async (req, resp) => {
    // adding the req.body data to the database 
    const info = req.body.name
    const status = await schema.find({name:info})
    resp.send(status)
    console.log(req.body)
})


// optimum way of deleting and updating using put and delete 

// update 
app.put("/update/:_id", async (req, resp) => { //_id is necessary remember not id
    // adding the req.body data to the database 
    const info = req.body
    const status = await schema.updateOne(req.params,
        {$set : req.body})
    resp.send(status)
    console.log(req.body)
})

// delete 
app.delete("/delete/:_id", async (req, resp) => { // _id is necessary remember
    // adding the req.body data to the database 
    const status = await schema.deleteOne(req.params)
    // const status = await schema.findByIdAndDelete(req.params)

    console.log(req.params)
    resp.send(status)
    console.log(status)
})

// Creating a serach api 

app.get("/find/:key", async (req, resp) => { // _id is necessary remember
    // adding the req.body data to the database 
    const status = await schema.find({
        $or :[
            {name : {$regex: req.params.key}}, // you will have to pass key since req.parm always results an object
            {course : {$regex: req.params.key}} 
        ]
    })
    // const status = await schema.findByIdAndDelete(req.params)
    resp.send(status)
    console.log(status)
})

app.listen(9000)