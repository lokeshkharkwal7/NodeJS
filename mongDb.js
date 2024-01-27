// Seprate file for handeling databases 

const {MongoClient} = require('mongodb') // Using object destructor to get the MongoClient
const url = 'mongodb://localhost:27017' // url of the local host where mongo db is located
const client = new MongoClient(url)   // client object creation using MOngClient
const database = 'e-comm'            // name of the databse which is inside or cluster

// Setting up the function to get the information from the Mongo DB Database 

async function getSpecificData(dBname , collectionName){
    let status = await client.connect()
    let db = status.db(dBname)
    let collection = db.collection(collectionName)
    return collection
}



// r n c d c 
// const {MongoClient}=require('mongodb')  
const mongoConn =  new MongoClient(url)

const getInfo = async ()=>{
    await mongoConn.connect()
    const database = mongoConn.db('e-comm')
    const collection = database.collection('products')
    return collection
}

module.exports = getInfo;
