import React, { useState } from "react";
import Create from './Create';

function Home(){
    //  eslint-disable-next-line
    const[todo,setTodo]=useState([])
    return(
        <div className="home">
        <h2>Todo List</h2>
        <Create />
        {
            todo.length===0 ? <h2>No Record</h2> :
            todo.map(to =>(
                <>
                  {to}
                </>
            ))
        }
        </div>
    )
}

export default Home