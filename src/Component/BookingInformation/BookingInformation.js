import React, { useEffect, useRef,  } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
// import { clearTheCart, getStoredCart } from '../../utilities/fakedb';


import "./BookingInformation.css"

const BookingInformation = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        // const savedCart = getStoredCart()
        


        fetch('', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        } , [])
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                // clearTheCart()
                reset()
            }
        })
    }

    
    return (
        <div className="form-start">
             <form className="" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
                <button>delete</button>
            </form>

        </div>
    );
};

export default BookingInformation;