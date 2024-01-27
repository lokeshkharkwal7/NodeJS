// const {MongoClient} = require('mongodb') // Using object destructor to get the MongoClient
// const url = 'mongodb://localhost:27017' // url of the local host where mongo db is located
// const client = new MongoClient(url)   // client object creation using MOngClient
// const database = 'e-comm'            // name of the databse which is inside or cluster

// // Setting up the function to get the information from the Mongo DB Database 

// async function getData(){
//     let status = await client.connect()            // asynchronoulsy connecting with the databasea via client 
//     let db = status.db(database)                   // getting database which is stored in the database variable
//     let collectons = db.collection('products')     // getting collections stored inside the database
//     let response = await collectons.find({}).toArray()  // using find technique to get all the information in the collection and converting into array 
//     console.log(response)  // printing response.
// }
// getData()

// // rerurning the collection and handelling the promise

// async function getDataSep(){
//     let status = await client.connect()            // asynchronoulsy connecting with the databasea via client 
//     let db = status.db(database)                   // getting database which is stored in the database variable
//     return db.collection('products')     // getting collections stored inside the database
// }
// getDataSep().then((req)=>{
//     return req.find({'Brand' : 'Apple'}).toArray()  // any product you have to find just pass it parameter to find function along key and value pair
// }).then((req)=>{
//     console.log("Product Found \n",req)
// })

// Setting up server details from a different file using promises 

const getSpecific = require('./mongDb')  //importing mongo db file 
getSpecific('e-comm','products').       // this function will return a promise regarding the succesfull reading of the files
then((req)=> req.find({'Brand':'Apple'}).toArray()).  // if file found another promise will return regarding the content of the file
then((req)=>{console.log("Value you are lookind for : ",req)}) // if content was successfully returned  print the output

// Using the same functionality using async and await 

const getCollection = require('./mongDb') 

// getSpecific2 will take 2 arguments the name of the database and the collection 

async function getdata(){
    const collection = await getCollection()
    const output = await collection.find({'name': 'Samsung galaxy'}).toArray()
    console.log('Value getted from the server using async Await : ')
    console.log(output)

}
// getdata()

// Performing Insert Operation 

async function writeData(){
    const collection = await getCollection()
    const output = await collection.insertMany([{
        "name":'Nokia 1500',
        "brand": 'Nokia',
        price : 1500
    },
    {
        "name":'Micromax M1',
        "brand": 'Micromax',
        price : 1500 
    }])
    if(output.acknowledged){console.log('Data Enterd Successfully')}
    else{console.warn('There is a Issue')}
}
// writeData() 
// Performing Update Operation 

const updateData = async ()=>{
    const collection = await getCollection()
    const updateOper = await collection.updateOne({'name':"Nokia 1500"},{ $set:{
    brand:"Nokia Old" , price:2000 }})
    if (updateOper.acknowledged){console.log("Data Updated Successfully")}
    else(console.log('Data need to be updated'))
}
// updateData() 
// Performing Delete Operation 
const deleteData = async ()=>{
    const collection = await getCollection()
    const deleteOper = await collection.deleteOne({'name':"Nokia 1500"}) 
    // You can also use delete many to handle duplicate records 
    console.log(deleteOper)
    if(deleteOper.deletedCount>0){console.log("Data Deleted Successfully")}
    else{console.log('There is an Issue')}
}
// deleteData() 

