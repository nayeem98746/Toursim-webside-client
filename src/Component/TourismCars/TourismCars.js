import React, { useEffect, useState } from 'react';
import TourismCar from '../TourismCar/TourismCar';
import './TourismCars'

const TourismCars = () => {
    const [vehicles, setVehicles]= useState([])


    useEffect( () => {
        fetch('./vehicles.json')
        .then(res => res.json())
        .then(data => setVehicles(data))
    } ,[])
    return (
        <div>
            <h2>chose the Vehicles</h2>
            <br /><br />
            <div className="vehicles-style">
                {
                    vehicles.map(vehi =><TourismCar
                    key={vehi.id}
                    vehi={vehi}
                    ></TourismCar> )
                }
            </div>
        </div>
    );
};

export default TourismCars;