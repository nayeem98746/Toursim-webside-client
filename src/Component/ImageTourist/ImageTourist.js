import React from 'react';
import { Link } from 'react-router-dom';

const ImageTourist = ({img}) => {
    const {id,Name, img1,}=img
    return (
        <div>
            
            <img width="200px" src={img1} alt="" />
            <h2>{Name}</h2>
            <Link to={`/allimg/${id}`}>
            <button style={{
                backgroundColor:"burlywood",
                borderRadius:"20px",
                color:"whitesmoke"
            
            }}>ALL IMG</button>
            </Link>
        </div>
    );
};

export default ImageTourist;