// // // // importing the http package 
// // // // using http package and createServer
// // // // using arrow function as an prameter and setting arrow parameter to req and Response
// // // // after this using  writeHead  200 , {'Content-Type : 'application'\'json' } 
// // // // using Res.write function and write anything that you want to display in the server 
// // // // use resp.end function to end the request 
// // // // using .listen(name of the port) and passing the port number in the parameter to access the files in a package 

// // // // Creating an API and using it on port 5000

// // // const data = require('./data.js')
// // // const http = require('http')
// // // http.createServer((req, resp)=>{
// // //     resp.writeHead(200, {'Content-Type':'application\json'})
// // //     resp.write(JSON.stringify(data))
// // //     resp.end()
// // // }).listen(5000)

// // // // Creating another Server on Port 6000 

// // // http.createServer((req,resp)=>{
// // //     resp.writeHead(200,{'Content-Type':'applicaton\json'})
// // //     resp.write("Hello World , first API")
// // //     resp.end()
// // // }
// // // ).listen(6000)

// // // // using file system and process.argv(used to get the argumets)

// // const fs = require('fs')
// // const path = require('path')
// // const inputs = process.argv // used to get the inputs after the node and name of the file in console
// // console.log(inputs)
// // if (inputs[2]==='open'){
// //     fs.writeFileSync(inputs[3],inputs[4])
// //     console.log(inputs[2],' operation is successfully performed')

// // } else if (inputs[2]==='remove'){
// //     fs.unlinkSync(inputs[3])
// //     console.log(inputs[2],' operation is successfully performed')}

// // else{
// //         console.log('wrong input selected')} 

// // // working with readdir and other methods inside fs 
// // // creating multiple files in the server 
// const fs = require('fs')
// const path = require('path')
// const dir = path.join(__dirname ,'DatabaseFiles')
// for (i = 0;i<5; i++){
//     fs.writeFileSync(`${dir}/file${i}.txt`, `This is the sample file with index ${i}`)
// }

// // reading multiple files from the server

// fs.readdir(dir , (err, file)=>{
//     file.forEach(value=>{
//         console.log("value is ",value)
//     })
// })

// // deleting the files from the server

// fs.readdir(dir , (err,file)=>{
//     file.forEach(name=>{
//         fs.unlinkSync(path.join(__dirname,'Databasefiles',`${name}`))

//     })
// })

// // Crud Operation on the node js Server 
const path = require('path')
const fs = require('fs')
const dbFiles = path.join(__dirname,'DatabaseFiles')
// create 
fs.writeFileSync(`${dbFiles}/file1.txt`, 'Information inside the file ')

// // read 
const filepath = path.join(dbFiles,'file1.txt')
fs.readFile(filepath,'utf-8',(err,data)=>{
    if(!err) console.log(data)
})

// // update 
fs.appendFile(filepath,' This is the data that have been appended to the file ',(err)=>{
    if(err) console.log('Some error occured')
})

// // rename 
const rename = path.join(dbFiles,'renameFile.txt')
fs.rename(filepath,rename,(err)=>{
    if (err) console.log('An Error Occured')
})

// // deleting 
fs.unlinkSync(rename)





