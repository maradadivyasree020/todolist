const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')
// const TodoModel=require('./Todo')
// const connectToMongo=require('./Todo')

const app=express()
app.use(cors())
app.use(express.json())
// app.use('/api/add',require('./add'));
// connectToMongo()
// app.use('/api/add')

mongoose.connect('mongodb://127.0.0.1:27017/todolist')    
const todoSchema = new mongoose.Schema({
    task:{ 
        type:String,
        required:true,
    }
})

const TodoModel=mongoose.model('todo',todoSchema)

app.get("/get",async(req,res)=>{
    console.log("Hello");
    const get=await TodoModel.find()
    console.log(get);
    res.send(get)
})

app.post('/add',async(req,res,next)=>{
    console.log("Hello")
    const text=req.body
    console.log(text) 
    let data=new TodoModel(text)
    const result=await data.save()
    res.send(result)

})

app.listen(5000,()=>{
    console.log("Connected")
})