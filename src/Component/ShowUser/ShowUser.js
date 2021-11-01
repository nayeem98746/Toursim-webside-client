import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowUser = () => {
    const [users, setusers] = useState([])


    useEffect( ()=> {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setusers(data))
    } ,[])

    const handleDelete = id =>{
      const warning = window.confirm('are you want delete user')
      if(warning){
        const url = `http://localhost:5000/users/${id}`
        fetch( url, {
            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('successfull delete user')
                const remainingUsers = users.filter(user => user._id !== id)
                setusers(remainingUsers)
            }
        })
      }
    }



    return (
        <div>
            <h2>User added : {users.length}</h2>
            <div>
                {
                    users.map(user => <li
                    style={{color:"green"}}
                    key = {user._id}
                    >{user.name} :: {user.email} :: {user.address} :: {user.phone}
                    <Link to={`/showUser/update/${user._id}`}><button style={{
                        backgroundColor:"greenyellow",
                        
                        borderRadius:'20px'
                

                    }}>Update</button></Link>
                    <button onClick={() => handleDelete(user._id)}
                    
                    style={{
                        backgroundColor:'red',
                        color:"whitesmoke",
                        borderRadius:'20px'
                

                    }}>delete</button>
                    </li>)
                }
            </div>
        </div>
    );
};

export default ShowUser;