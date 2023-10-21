const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const bodyParser=require('body-parser')
// const TodoModel=require('./Todo')
// const connectToMongo=require('./Todo')

const app=express()
app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use('/api/add',require('./add'));
// connectToMongo()
// app.use('/api/add')
 
mongoose.connect('mongodb://127.0.0.1:27017/todolist')    
const todoSchema = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const TodoModel=mongoose.model('todo',todoSchema)

app.get("/get",async(req,res)=>{
    // console.log("Hello");
    const get=await TodoModel.find()
    // console.log(get);
    res.send(get)
})
 
app.post('/add',async(req,res,next)=>{
    // console.log("Hello")
    const text=req.body
    // console.log(text) 
    let data=new TodoModel(text)
    const result=await data.save()
    res.send(result)
})

app.put('/done/:id',(req,res)=>{
    const {id}=req.params;
    // console.log(id)
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    console.log(id)
    TodoModel.findByIdAndDelete({_id:id},{done:true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    // const {pd}=req.body.param2;
    console.log(id)
    // console.log(pd) 
    // res.send(id)
    // const up=prompt("enter up");
    // console.log(up)
    // TodoModel.findByIdAndUpdate({_id:id},{task:up.task},{done:false})
    // .then(result => res.json(result))
    // .catch(err => res.json(err))
})

app.listen(5000,()=>{
    console.log("Connected") 
})