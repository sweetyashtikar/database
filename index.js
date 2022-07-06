const dbConnect=require('./mongodb');
const express= require('express');
const app=express();

// middleware
app.use(express.json());

app.post('/', async (req,resp)=>{
    // console.log(req.body);
    let data= await dbConnect();
    let result=await data.insertOne(req.body)
    resp.send(result)
})
app.listen(5000)