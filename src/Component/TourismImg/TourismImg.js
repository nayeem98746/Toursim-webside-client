import React, { useEffect, useState } from 'react';
import TourismImgs from './TourismImgs/TourismImgs';
import "./TourismImg.css"

const TourismImg = () => {
    const [images, setImages] = useState([])

    useEffect(()=> {
        fetch('./imageData.json')
        .then(res => res.json())
        .then(data => setImages(data))
    })
    return (
        <div>
            <h2>this is TourismImg</h2>
          <div className="img-container">
          {
                images.map(img => <TourismImgs
                key = {img._id}
                img= {img}
                ></TourismImgs>)
            }
          </div>
        </div>
    );
};

export default TourismImg;