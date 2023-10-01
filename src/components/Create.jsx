import React, { useState } from "react";
import '../App.css';
// import axios from 'axios'

function Create(){
    const[todo,setTodo]=useState({task:""})

    const handleAdd = async (e) => {
        e.preventDefault();
        const {task} = todo;
        const response = await fetch("http://localhost:5000/add", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({task})
        });
        const json = await response.json()
        console.log(json);
            // Save the auth token and redirect
            // localStorage.setItem('jwtData', json.jwtData); 
            // console.log(json.jwtData);
            // navigate("/");
    }


    // const handleAdd = async (e) =>{
    //     console.log(task)
    //     e.preventDefault();
    //     let res=await fetch("http://localhost:3000/add",{
    //         method:"GET",
    //         headers:{
    //             "Content-type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             task:todo.task
    //         })
    //     })
    //     console.log(res)
    // } 
    const onChange = (e)=>{
        setTodo({...todo, [e.target.name]: e.target.value})
    }
    
    // <Link onClick={() => handleAdd()} to='/'></Link>

    return(
        <form className="create" method="POST">
          <input type="text" placeholder="Enter Task" name="task" value={todo.task} onChange={onChange}/>
          {/* onChange={(e) => { console.log(e.target.value);setTask(e.target.value)}}/> */}
          <input type="submit" value="submit" onClick={handleAdd}/>
        </form>
    )
}

export default Create;