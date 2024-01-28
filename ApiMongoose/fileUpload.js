const express = require('express')
const multer = require('multer')
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, "uploads Folder")  // your folder Name
        },
        filename: (req, file, cb)=> {
            cb(null, file.fieldname + '-' + Date.now() + '.jpg') // your file name
        }
    })
}).single('key_name')
const app = express()

// Passing the middleware in the get function 

app.post('/upload', upload, (req, resp) => {  // Since multer is a middleware we need to pass it in the route function
    resp.send('Data Send')
    console.log("Running")
})
app.listen(5500)