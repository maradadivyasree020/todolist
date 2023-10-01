// const mongoose =require('mongoose')

// const TodoSchema=new mongoose.Schema({
//     task:String
// })

// const TodoModel=mongoose.model("todo",TodoSchema)
// module.exports=TodoModel


const mongoose=require('mongoose')

const connectToMongo =async ()=>{
    const res=await mongoose.connect('mongodb://127.0.0.1:2701/todolist')
    res && console.log('connected')
}

module.exports=connectToMongo;