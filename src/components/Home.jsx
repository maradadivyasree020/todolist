import React, { useEffect, useState } from "react";
import Create from './Create';
// import App from './App';
import axios from 'axios'
// import {MdOutlineRadioButtonUnchecked} from "react-icons/md";
// import {FiEdit} from "react-icons/fi"
import {FaTrash} from "react-icons/fa6"
import {MdOutlineUpdate} from "react-icons/md"
import {AiOutlineCheckCircle} from "react-icons/ai"
// import {GrUpdate} from "react-icons/gr"

function Home(){
    const[todo,setTodo]=useState([])
    // const[upd,setUpd]=useState(false)
    useEffect(()=>{
        // const response = fetch("http://localhost:5000/get", { 
        //     method: 'GET',
        // })},[]);
        axios.get('http://localhost:5000/get')
        .then(result=>setTodo(result.data))
        .catch(err=> console.log(err))
    },[])

    const handleEdit = (id)=>{
        axios.put('http://localhost:5000/done/'+id)
        .then(result =>{
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        })
        .catch(err=> console.log(err))
    }

    const handleDelete = (id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/delete/'+id)
        .then(result =>{
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        })
        .catch(err=> console.log(err))
    }

    // const handleUpdate = (pd,id) =>{
        // console.log(id,pd)
        // axios.put('http://localhost:5000/update/'+id)
        // .then(result =>{
        //     // eslint-disable-next-line no-restricted-globals
        //     location.reload()
        // })
        // .catch(err=> console.log(err))
    // }

    // const handle =(uid)=>{
    //     console.log(uid);
    //     <App />
    //     // const upd=prompt("Enter updated todo")
    //     // handleUpdate(uid)
    // }

    return(
        <div className="home">
        <h2>Add your Todo</h2>
        <Create />
        <div className="abc">
        {
            todo.length===0 ? <h2>No Todo...</h2> :
            todo.map(to =>(
                <div className="tas">
                    <div className="checkbox" onClick={() =>handleEdit(to._id)}>
                        {to.done
                          ?<AiOutlineCheckCircle className="icon" />
                          :<MdOutlineUpdate className="icon" />
                        }
                        <p className={to.done ? "line" :""}>{to.task}</p><br/>
                    </div>
                    <div>
                        {/* <span><FiEdit className="icon" onClick={() => handle(to._id)}/></span> */}
                        {/* <span><GrUpdate className="icon" onClick={() => handle(to._id)}/></span> */}
                        <span><FaTrash className="icon" onClick={() => handleDelete(to._id)}/></span>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    )
}

export default Home