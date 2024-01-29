import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleDoctor = data => {
        console.log(data)
    }

    return (
        <div className='w-96 p-7'>
            <h2>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(handleDoctor)}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-bold">Name</span>
                    </div>
                    <input type="text"  {...register("name", { required: "Please enter name" })} className="input input-bordered w-full max-w-xs" />
                </label>
                {errors.name && <p role="alert" className='text-red-700'>{errors.name.message}</p>}

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-bold">Email</span>
                    </div>
                    <input type="email"  {...register("email", { required: "please enter valid email id" })} className="input input-bordered w-full max-w-xs" />
                </label>
                {errors.email && <p role='alert' className='text-red-700'>{errors.email.message}</p>}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-bold">Specality</span>
                    </div>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </label>
                {errors.password && <p role='alert' className='text-red-700'>{errors.password.message}</p>}
                <input className='btn btn-accent w-full mt-3' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;