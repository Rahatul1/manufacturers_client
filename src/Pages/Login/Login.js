import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";
import Lodding from '../Shared/Lodding'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    //navigate || location
    const location = useLocation();
    const navigate = useNavigate();
    // sign in google auth
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();

    //signin email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let from = location.state?.from?.pathname || "/";

    // user 
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from, gUser]);

    // lodding
    if (loading || gLoading) {
        return <Lodding></Lodding>
    }

    // error
    let errormsg;
    if (error || gError) {
        errormsg = <p className="text-red-500 ">{error?.message || gError?.message}</p>;
    }

    //from submit
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data.email, data.password)
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="Email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email',
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a valid Password',
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        {errormsg}
                        <input className="btn w-full max-w-xs" type="submit" value="Login" />
                    </form>
                    <small>New to manufacture: <Link className="text-secondary" to="/signup">Create a new account</Link> </small>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;