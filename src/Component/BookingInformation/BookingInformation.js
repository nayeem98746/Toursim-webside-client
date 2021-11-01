import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const BookingInformation = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const phoneRef = useRef()
    const handleAddUser = e => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        const address = addressRef.current.value
        const phone = phoneRef.current.value

        const newUser = {name, email, address, phone}
        fetch('http://localhost:5000/users', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('successfuly')
                
            }
        })

        e.preventDefault()
    }
    return (
        <div>
            <h2>this is booking users</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="Name" /><br /><br />
                <input type="text" ref={emailRef} placeholder="email" /><br /><br />
                <textarea type="text" ref={addressRef} placeholder="address" /><br /><br />
                <input type="number" ref={phoneRef} placeholder="Number" /><br /><br />

                <input type="submit" value="Add" /><br /><br />
                <Link to="/showUser"><button> show User </button></Link>
            </form>
        </div>
    );
};

export default BookingInformation;