import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from './../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: specialties, isLoading} = useQuery({
        queryKey:['specility'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/appointmentSpecility`);
            const data = await res.json();
            return data;
        }
})

    const handleDoctor = data => {
        console.log(data)
    }

    if(isLoading){
        return <Loading></Loading>
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
                    <select 
                    {...register('speciality')}
                    className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(speciality =>  <option
                          key = {speciality._id}
                          value={speciality.name}
                            >{speciality.name}</option>)
                        }
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-bold">Photo</span>
                    </div>
                    <input type="file"  {...register("img", { required: "Please enter photo" })} className="input input-bordered w-full max-w-xs" />
                </label>
                {errors.img && <p role="alert" className='text-red-700'>{errors.img.message}</p>}
                <input className='btn btn-accent w-full mt-3' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;