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

app.get("/add",(req,res)=>{
    console.log("Hello");
    res.send("Heloo")
})

//run
app.post('/add',async(req,res,next)=>{
    console.log("Hello")
    const text=req.body
    // let dqq=await connectToMongo()
    console.log(text) 
    let data=new TodoModel(text)
    const result=await data.save()
    res.send(result)

})

// app.post('/add',(req,res)=>{
//     const task=req.body.task;
//     TodoModel.create({
//         task:task
//     })
//     let data=new TodoModel({task:task})
//     res.send("send")
//     .then(result => res.json(result))
//     .catch(err=>res.json(err))
// })

app.listen(5000,()=>{
    console.log("Connected")
})