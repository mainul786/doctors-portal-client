import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useHook';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [createUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();
    const [token] = useToken(createUserEmail);

    if(token){
        navigate('/');
    }
    
    const handleSignup = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            toast('User created succefully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
               savedUser(data.name, data.email)
            })
            .catch(error => console.log(error))
        })
        .catch(error =>{ 
            console.log(error)
        setSignupError(error.message)
        })
    }

    const savedUser = (name, email) =>{
        const user = {
            name: name,
            email: email
        }

        fetch(`http://localhost:5000/users`, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCreatedUserEmail(email);
        })
    }



    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7' >
                <h1 className='text-4xl font-bold text-center'>Register</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
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
                            <span className="label-text font-bold">Password</span>
                        </div>
                        <input type="password" {...register("password", {
                            required: 'please provide valid password!',
                            minLength: { value: 6, message: 'atleast provide 6 charecter' }
                        },

                        )} className="input input-bordered w-full max-w-xs" />

                    </label>
                    {errors.password && <p role='alert' className='text-red-700'>{errors.password.message}</p>}
                    <input className='btn btn-accent w-full mt-3' type="submit" value="Register" />
                </form>
                        {signupError && <p className='text-red-700'>{signupError}</p>}

                <p>Already Have an Account? <Link to='/login' className='text-secondary'>Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;