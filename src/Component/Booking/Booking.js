import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {service} = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/ServiceData.json')
        .then(res => res.json())
        .then(data => setDetails(data))
        // .then(data => console.log(data))
    },[])

    const product = details.find(pd => pd.id == service)
    console.log(product)

    return (
        <div>
           <img src={product?.img} alt="" />
           <h2>Name : {product?.name}</h2>
           <h3>Amount : {product?.price}$</h3>
           <h3>Description : {product?.description}</h3>
        </div>
    );
};

export default Booking;