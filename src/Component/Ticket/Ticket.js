import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Ticket = () => {
    const [details, setDetails]= useState([])
    const { vehicle} = useParams()
    useEffect( () => {
        fetch(`http://localhost:5000/vehicles/${vehicle}`)
        .then(res => res.json())
        .then(data => setDetails(data))
        // .then(data => console.log(data))
    } ,[vehicle])
    // const product = details?.find(pd => pd._id == vehicle)
    // console.log(product)
    return (
        <div>
             <p>{vehicle}</p>   
            <img width="200pxs" src={details?.img} alt="" />
            <h2>{details?.Name}</h2>
            <h4>{details?.Amount}$</h4>
            <p>{details?.description}</p>
            <p>Our tourist is the best service to provide the passenger. And the passenger is very enjoyed there journey.</p>
        </div>
    );
};

export default Ticket;