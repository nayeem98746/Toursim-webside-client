import React from 'react';
import { Link } from 'react-router-dom';

const TourismCar = (props) => {
    const {id, Name, img, amount, description} = props.vehi
    return (
        <div>
           <img width="200pxs" src={img} alt="" />
            <h2>{Name}</h2>
            <h4>{amount}</h4>
            <p>{description}</p>
            <Link to={`/ticket/${id}`} > <button style={{
                backgroundColor:"lightpink",
                borderRadius:"20px",
                
        }}>cart this</button> </Link>
        </div>
    );
};

export default TourismCar;