import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('https://limitless-reef-20591.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className="row">
            <h2 className="p-5">Check out these EPIC Destinations !</h2>
            <div className="service-container ">
                {
                    services.map(service => <Service
                    key={service._id}
                    service = {service}
                    ></Service>)
                }
            </div>
            <Link to="/serviceAdded"> <button style={{
                backgroundColor:"skyblue",
                borderRadius:"20px"
                
                }}>Add A Service</button> </Link>
            
        </div>
    );
};

export default Services;