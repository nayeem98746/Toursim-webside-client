import { jsonEval } from '@firebase/util';
import React, { useEffect, useState } from 'react';

const MangeService = () => {
    const [services, setServices] = useState([])
 
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div>
            <h2>THis is a MangeService</h2>
        </div>
    );
};

export default MangeService;