
const express = require('express')
const path = require('path')
const app = express()
// const pathtoIndex = path.join(__dirname,'pages/index.html')
// app.get('',(req,resp)=>{
//     resp.sendFile(pathtoIndex)
// })
// app.listen(1000)

// Working with the view / ejs engine 
app.set('view engine','ejs')

app.get('',(_,resp)=>{
    resp.render('index')
})
app.get('/location',(_,resp)=>{
    info ={
        name : 'Shantanu',
        course : 'Mathematics',
        marks : 100,
        skills:['Aljebra','Trignometry','Calculas','Statistics']
    }

    resp.render('location',info)
})

app.listen(5000)

// Creating another instance to use the middleware on different port

const app2 = express()
app2.set('view engine','ejs')

// Using Middlewares 

// application level 
const reqFilter = (req, resp , next)=>{
    if(!req.query.age){
        resp.send(`
        <h1> Unable to proceed without age <h1>
        `)
    }else if (req.query.age < 18){
        resp.send(`
        <h1> Unable to access the content <h1>     
        `)
    }else{
        next()
    }
}
// app2.use(reqFilter) // calling the reqFilter (Once called all routes will get the facility of the middleware)


// Since Application Middleware is active the routes below need to pass from the authenticaton 


// app2.get('',(_,resp)=>{
//     resp.render('index')
// })

// app2.get('/location',(_,resp)=>{
//     info ={
//         name : 'Shantanu',
//         course : 'Mathematics',
//         marks : 100,
//         skills:['Aljebra','Trignometry','Calculas','Statistics']
//     }

//     resp.render('location',info)
// })


// Using Route level Middleware 

// since reqFilter middleware is already established 
//we will only pass to the parameter of the get method 

// app2.get('',reqFilter,(_,resp)=>{  //this filter is individually supplied with the route
//     resp.render('index')
// })

// app2.get('/withoutmiddleware',(req,resp)=>{  //you can access this site since middleware is not applied
//     resp.render('index')
// })


// USING THE BUILD IN ROUTER MODULE IN EXPRESS JS 

const route = express.Router()
route.use(reqFilter)
route.get('/',(req,resp)=>{
    resp.render('index')
})
// use app if you don't want middle ware on this route
app2.get('/canaccess',(req, resp)=>{
    resp.render('index')
} )
app2.get('/location',(req, resp)=>{
    info ={
        name : 'Mohit',
        course : 'Mathematics',
        marks : 100,
        skills:['Aljebra','Trignometry','Calculas','Statistics']
    }
    resp.render('location',info)
} )
app2.use('/',route)
app2.listen(9000) // Running in the port 9000

