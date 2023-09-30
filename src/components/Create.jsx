import React, { useState } from "react";
import '../App.css';
// import axios from 'axios'

function Create(){
    const[task,setTask]=useState()
    const handleAdd = async (e) =>{
        console.log(task)
        e.preventDefault();
        
        // console.log(todo)

        let res=await fetch("/add",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                task:task
            })
        })
        // const data= await res.json();
        // if(!data)
        // console.log(data)
    } 
    
    // <Link onClick={() => handleAdd()} to='/'></Link>

    return(
        <form className="create" method="POST">
          <input type="text" placeholder="Enter Task" name="task" value={task} onChange={(e) => { console.log(e.target.value);setTask(e.target.value)}}/>
          <input type="submit" value="submit" onClick={handleAdd}/>
        </form>
    )
}

export default Create;