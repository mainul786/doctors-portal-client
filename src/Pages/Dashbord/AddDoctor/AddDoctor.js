import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from './../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgKey;
    const navigate = useNavigate();

    const {data: specialties, isLoading} = useQuery({
        queryKey:['specility'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/appointmentSpecility`);
            const data = await res.json();
            return data;
        }
})

    const handleDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
         const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgData => {
           if(imgData.success){
          
          const doctor = {
            name: data.name,
            email:data.email,
            speciality: data.speciality,
            image: imgData.data.url
          }

          fetch(`http://localhost:5000/doctors`, {
            method:"POST",
            headers:{
                'content-type':'application/json',
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(doctorData => {
            if(doctorData.data.acknowledged){
                toast.success('doctor inserted succefully!');
                navigate('/dashboard/managedoctors');
            }
        })
           }
        })
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
                    <input type="file"  {...register("image", { required: "Please enter photo" })} className="input input-bordered w-full max-w-xs" />
                </label>
                {errors.image && <p role="alert" className='text-red-700'>{errors.image.message}</p>}
                <input className='btn btn-accent w-full mt-3' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;