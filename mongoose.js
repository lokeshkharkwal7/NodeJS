const mongooseCon = require('mongoose')   
//

const main =  async()=>{


await mongooseCon.connect('mongodb://localhost:27017/e-comm')

// creating schema to make sure the data is validated 
const userSchema = new mongooseCon.Schema({
    name: String,
    age: Number,
    email: String
  });

  const User =  mongooseCon.model('products', userSchema);

  // Create a new user
  const newUser = new User({
    name: 'John Doe', 
    age: 25,
    email: 'john.doe@example.com'
  });
await newUser.save()
console.log('Data entered')

}

// main()


// console.log(dbCconn)


async function newmain(){
    console.log('hello')
    const mongoose = require('mongoose')
    await mongoose.connect("mongodb://localhost:27017/e-comm")
    const schema = new mongoose.Schema({
        "name" : String ,
        "course" : String,
        "marks" : Number
    })
    const model = mongoose.model('products',schema)
    const information = new model({
        name : 'Shantanu',
        course : 'Mathematics',
        "marks" : 100
    })
    const status = await information.save()
    console.log('Basic Setup done')  
}
// newmain()


 // performing the crud opertion 
const crud = async()=>{
    const mongoose = require('mongoose')
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    // performing read operation operation 
    const schema = new mongoose.Schema({
        name : String,
        course : String,
        marks : Number,
        email : String,
        age : Number
    })
    const model = mongoose.model('products',schema)
    // read operation 
    // const data = await model.find({name : 'PostMan'}) 

    // update Operation 
    // const update = await model.updateOne({name : 'John Doe'},
    //     {$set:{email : 'updated.John.doe@gmail.com', age:24}})
    // console.log(update)

    // delte Operation 
    // const deletedata = await model.deleteOne({name : 'John Doe'})
    // console.log(deletedata)
}
crud()

