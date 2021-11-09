import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddImg = () => {
    const { register, handleSubmit , reset } = useForm();
    const onSubmit = data => {
    
        console.log(data)
        
        axios.post('https://limitless-reef-20591.herokuapp.com/images')
        .then(res => {
            console.log(res)
          if(res.data.insertedId){
            alert('Your data is successed')
            reset()
          }
        })

    }

    return (
        <div>
            <h2 className="m-6">add a Images</h2>
            <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("img")} placeholder="image" /><br /><br />
      <input  {...register("img")} placeholder="image" /><br /><br />
      <input  {...register("img")} placeholder="image" /><br /><br />
      <input  {...register("img")} placeholder="image" /><br /><br />
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

export default AddImg;