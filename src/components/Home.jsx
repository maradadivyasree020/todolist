import React, { useEffect, useState } from "react";
import Create from './Create';
import axios from 'axios'
// import {IoTrash} from "react-icons/iO5";
// import {GrRadialSelected} from "react-icons/gr"

function Home(){
    const[todo,setTodo]=useState([])
    useEffect(()=>{
        // const response = fetch("http://localhost:5000/get", { 
        //     method: 'GET',
        // })},[]);
        axios.get('http://localhost:5000/get')
        .then(result=>setTodo(result.data))
        .catch(err=> console.log(err))
    },[])
    return(
        <div className="home">
        <h2>Todo List</h2>
        <Create />
        {
            todo.length===0 ? <h2>No Record</h2> :
            todo.map(to =>(
                <div className="task">
                    <div className="checkbox">
                        <div className="icon"/>
                        {to.task}<br/>
                    </div>
                    <div>
                        <span><div className="icon"/></span>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Home