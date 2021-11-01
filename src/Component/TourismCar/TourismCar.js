import React from 'react';
import { Link } from 'react-router-dom';

const TourismCar = (props) => {
    const { _id, Name, img, Amount, description} = props.vehi
    return (
        <div>
           <img width="200pxs" src={img} alt="" />
            <h2>Name:{Name}</h2>
            <h4>Amount: {Amount}$</h4>
            <p>{description}</p>
            <Link to={`/ticket/${_id}`} > <button style={{
                backgroundColor:"lightpink",
                borderRadius:"20px",
                
        }}>cart this</button> </Link>
        </div>
    );
};

export default TourismCar;