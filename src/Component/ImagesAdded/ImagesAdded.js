import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const ImagesAdded = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      
    console.log(data)
    axios.post('http://localhost:5000/images' , data)
    .then(res => {

       if(res.data.insertedId){
           alert('your image added')
           reset()
           
       }
    })
};
   
    return (
        <div>
            <h2>  imagesadded</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name")} placeholder="Name" />   <br /><br />
              <input {...register("img1")} placeholder="img url" /> <br /><br />
              <input {...register("img2")} placeholder="img url" /><br /><br />
              <input {...register("img3")} placeholder="img url" /><br /><br />
              <input {...register("img4")} placeholder="img url" /><br /><br />
              <input {...register("img5")} placeholder="img url" /><br /><br />
      
             <input type="submit" />
    </form>
        </div>
    );
};

export default ImagesAdded;