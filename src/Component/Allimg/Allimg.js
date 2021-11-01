import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Allimg = () => {
    const [image , setImage] = useState([])
    const {img} = useParams()

    useEffect( () => {
        fetch('/imageData.json')
        .then(res => res.json())
        .then(data => setImage(data))

    } ,[])
    const product = image.find(pd => pd.id == img)
    console.log(product)
    return (
        <div>
            <h2>Name:{product?.Name}</h2>
            <img width="500px" src={product?.img1} alt="" />
            <img width="500px" src={product?.img2} alt="" />
            <img width="500px" src={product?.img3} alt="" />
            <img width="500px" src={product?.img4} alt="" />
            <img width="500px" src={product?.img5} alt="" />
        </div>
    );
};

export default Allimg;