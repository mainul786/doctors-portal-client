import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useHook';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const {signin, googleLogin} = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

   const handleLogin = data =>{
    setLoginError('')
    signin(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
       
    })
    .catch(err => {
        console.log(err)
        setLoginError(err.message)
    })
   }

   const handleGoogleSign = () =>{
    googleLogin()
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error));
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
                     minLength: {value:6, message:'Password provide at least 6 charecter'}
                    }
                        )} className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text-alt">Forget Password?</span>

                        </div>
                    </label>
                    {errors.password && <p role="alert" className='text-red-700'>{errors.password.message}</p>}
                    <input className='btn btn-accent w-full' type="submit" value="Login" />
                </form>
                {loginError && <p className='text-red-700'>{loginError}</p>}
                <p>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSign}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;