import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./ServiceAdded.css"


const ServiceAdded = () => {
    const { register, handleSubmit , reset } = useForm();
  const onSubmit = data => {
    
    console.log(data)
    
    axios.post('https://limitless-reef-20591.herokuapp.com/services', data)
    .then(res => {
      if(res.data.insertedId){
        alert('Your data is successed')
        reset()
      }
    })

  };
    return (
        <div className="page-style">
            <h2 className="m-6">add a service</h2>
            <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
      <input   {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" /> <br /><br />
      <textarea  {...register("description")} placeholder="Description" /><br /><br />
      <input  type="number" {...register("price")} placeholder="price" /><br /><br />
      <input  {...register("img")} placeholder="image" /><br /><br />

      <input style={{
        backgroundColor:"pink",
        borderRadius:"25px",
        color:"whitesmoke"
      }}  type="submit" />
    </form>
        </div>
    );
};

export default ServiceAdded;