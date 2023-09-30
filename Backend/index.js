const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')
// const TodoModel=require('./Todo')

const app=express()
app.use(cors)
app.use(express.json())
// app.use('/add')

mongoose.connect('mongodb://127.0.0.1:27017/todolist')    
const TodoSchema = new mongoose.Schema({
    task:String
})
const TodoModel=mongoose.model("todo",TodoSchema)

app.post("/add",async(req,res)=>{
    console.log(req.body["task"])
    let data=new TodoModel(req.body)
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

app.listen(5000)