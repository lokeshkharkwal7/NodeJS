// get express js , mongo db collections 
// create instande of express js 
// use get method and mongo db collections side by side 

const express = require('express')
const mongodb = require('mongodb')
const getCollection = require('./mongDb')

const app = express()
app.use(express.json());

app.get('/', async (req, resp)=>{
    const collection = await getCollection()
    const output = await collection.find().toArray()
    console.log(output)
    resp.send(output)   
})

app.post('/post', async (req, resp)=>{
    const collection = await getCollection()
    const output = await req.body
    const status = await collection.insertOne(output)
    console.log(status)
})

app.post('/delete', async (req, resp)=>{
    const collection = await getCollection()
    const output = await req.body
    dlname = output.name
    const status = await collection.deleteOne({"name": dlname})
    if(status.deletedCount>0){console.warn('Data Deleted Successfully')}
    else{console.log("Error Occured")}
})

// Updating data using put method 

app.put('/:name', async (req, resp)=>{
    phoneName = req.params.name
    const collection = await getCollection()
    const status = await collection.updateOne(
        {name : phoneName},
        {$set: req.body}
    )
    console.log(status)
})

// Deleting an item using delete route method 

app.delete('/:delete', async (req, resp)=>{
    deleteId = req.params.delete
    const collection = await getCollection()
    const status = await collection.deleteOne({"_id" : new mongodb.ObjectId(deleteId)})
    resp.send(status)
    if (status.deletedCount>0){console.log('Data Deleted Successfully')}
    else{console.log("There is an Issue ")}
})
app.listen(9000)