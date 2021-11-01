import React, { useEffect, useState } from 'react';
import ImageTourist from '../ImageTourist/ImageTourist';
import "./ImagesTourist.css"

const ImagesTourist = () => {
    const [images, setImages] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/Images')
        .then(res => res.json())
        .then(data => setImages(data))
    },[])


    return (
        <div>
           <h2>OUR TOURIST ALL IMAGES</h2>
           <div className="image-card">
               {
                   images.map(img => <ImageTourist
                   key={img.id}
                   img={img}
                   
                   
                   >

                   </ImageTourist>)
               }
           </div>
        </div>
    );
};

export default ImagesTourist;