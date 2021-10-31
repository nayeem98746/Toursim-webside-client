import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Ticket = () => {
    const [details, setDetails]= useState([])
    const {vehi} = useParams()
    useEffect( () => {
        fetch('/vehicles.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    } ,[])
    const product = details.find(pd => pd.id == vehi)
    return (
        <div>
             <img width="200pxs" src={product?.img} alt="" />
            <h2>{product?.Name}</h2>
            <h4>{product?.amount}</h4>
            <p>{product?.description}</p>
        </div>
    );
};

export default Ticket;