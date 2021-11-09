import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const {id} = useParams()

    useEffect ( () => {
        const url = `https://limitless-reef-20591.herokuapp.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])
    return (
        <div>
            <h2>this is update user {user.name}</h2>
            <p>{id}</p>
        </div>
    );
};

export default UpdateUser;