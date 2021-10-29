import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/404.jpg"

const NotFound = () => {
    return (
        <div>
           <img src={img} alt="" /><br /><br />
           <Link to="/"><button className="btn-danger rounded p-3">Go Back</button></Link>
        </div>
    );
};

export default NotFound;