const express = require('express')
require('dotenv').config()
const mysql=require('mysql')
const cors = require('cors')
const app=express()
const port=3002
app.use(cors())
app.use(express.json())
let login=false
const db1= mysql.createConnection({ 
  user:'root',
  host:'localhost',
  password:'akash1234',
  database:'userdata'
}) 


/* const db2= mysql.createConnection({ this database is for future use
  user:'root', 
  host:'localhost',
  password:'akash1234',
  database:'cart'
}) */


app.post('/reg',(req,res)=>{
  const data=req.body.data
  db1.query('INSERT INTO users (user,pwd) VALUES (?,?)',[data.email,data.pwd],
  (err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(data)
    }
  })
})

app.post('/get',(req,res)=>{
  const data=req.body.data
  db1.query(
    'SELECT * FROM users WHERE user=? and pwd= ?',
    [data.email, data.pwd],
    (err,result)=>{
      if(err){
        res.send({err:err})
      }
      else{
        if(result.length>0){
          res.send({status:true})
        }
        else{
          res.send({status:false})
        }
      }
    }
  )
})

app.post('/login',(req, res)=>{
  const data= req.body.data
  login=data
  res.send('changed')
})

/* app.post('/change',(req, res)=>{
  const data=req.body.data
  login=data
  res.send('changed')
}) */
app.get('/check',(req,res)=>{
  res.send({status:login})
})


app.listen(process.env.PORT||port, ()=>{
  console.log('Running Server')
})