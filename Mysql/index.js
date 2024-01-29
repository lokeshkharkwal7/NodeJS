const mysqlconn = require('./config')
console.log(mysqlconn)

const express = require('express')
const app = express()

app.get('/', (req, resp)=>{
    mysqlconn.query('select * from sampletable',(err, result)=>{
        if(err){resp.send(err)}
        else {resp.send(result)}
    })
    // resp.send('Mysql is connected')
})

app.use(express.json())

app.post('/insert', (req, resp)=>{
    mysqlconn.query('INsert INTO sampletable SET ?',req.body,(err, result)=>{
        if(err){resp.send(err)}
        else {resp.send(result)}
    })
    // resp.send('Mysql is connected')
})

app.put('/:id', (req, resp)=>{
    data = [req.body.Name , req.body.Course, req.body.Marks,req.params.id] // this links directly to query statement on the chronological order
    mysqlconn.query('update sampletable SET Name = ?, Course = ?, Marks = ? where id = ?',data,(err, result)=>{
        if(err){resp.send(err)}
        else {resp.send(result)}
    })
    // resp.send('Mysql is connected')
})


app.delete('/:id', (req, resp)=>{

     mysqlconn.query(`delete from sampletable where id = ${req.params.id} `,(err, result)=>{
        if(err){resp.send(err)}
        else {resp.send(result)
       }
    })
    // resp.send('Mysql is connected')
})
app.listen(5550)