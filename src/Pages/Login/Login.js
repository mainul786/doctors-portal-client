import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   const handleLogin = data =>{
    console.log(data)
   }
    return (
        <div  className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7' >
                <h1 className='text-4xl font-bold text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Email</span>
                        </div>
                        <input type="email" {...register("email",
                            {required:'Please enter a valid Email'},     
                        )} className="input input-bordered w-full max-w-xs" />
                    </label>
                    {errors.email && <p role="alert" className='text-red-700'>{errors.email.message}</p>}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Password</span>
                        </div>
                        <input type="password" {...register("password",{required:'Please enter a valid Pawword',
                     minLength: 6   
                    }
                        )} className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text-alt">Forget Password?</span>

                        </div>
                    </label>
                    {errors.password && <p role="alert" className='text-red-700'>{errors.password.message}</p>}
                    <input className='btn btn-accent w-full' type="submit" value="Login" />
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;