import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddvehiclesData = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data)
      axios.post('http://localhost:5000/vehicles', data)
      .then(res => {
          if(res.data.insertedId){
              alert('added successfully')
              reset()
          }
          console.log(res)
      })

};
    return (
        <div>
            <h2>add vehicles data </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder="Name" /><br /><br />

      <textarea {...register("description")} placeholder="description" /><br /><br />

      <input  {...register("img")} placeholder="image" /><br /><br />

      <input type="number" {...register("Amount")} placeholder="Amount" /><br /><br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddvehiclesData;