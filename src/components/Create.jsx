import React, { useState } from "react";
import '../App.css';
import axios from "axios";

function Create(){
    const[todo,setTodo]=useState({task:""})

    const handleAdd = async (e) => {
        e.preventDefault();
        const {task} = todo;

        axios.post('http://localhost:5000/add',{task:task})
        .then(result =>{
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        })
        .catch(err => console.log(err))

        // eslint-disable-next-line
        // const response = await fetch("http://localhost:5000/add", { 
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({task}),
        // });
        // const json = await response.json()
        // console.log(json);
    }

    // const onCheck=(e)=>{
    //     if (e.target.value=" ")
    //     alert("enter a todo")
    //     else
    //     onChange();
    // }
    
    const onChange = (e)=>{
        // if(e.target.value="")
        // alert("enter a todo")
        console.log(e.target.value)
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    
    return(
        <form className="create" method="POST">
          <input type="text" placeholder="Enter Task" name="task" value={todo.task} onChange={onChange}/>
          <input type="submit" value="ADD" onClick={handleAdd}/>
        </form>
    )
}

export default Create;