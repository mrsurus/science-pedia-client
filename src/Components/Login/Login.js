import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
    const { logIn, googleLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [createEmail, setCreateEmail] = useState('')
    const [token] = useToken(createEmail)

    if(token){
        navigate(from, { replace: true })
    }
    const {
        register, reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        logIn(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(user);
                setCreateEmail(data.email)
                reset()
                setLoginError('')
                Swal.fire(
                    'Good job!',
                    'successfully log in!',
                    'success'
                  )
            })
            .catch(err => setLoginError(err.message.slice(22,36)))
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user
                console.log(user);
                setCreateEmail(user.email)
                reset()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="md:flex "> 
            <div className="w-1/2 mx-auto">
                <img className="w-full " src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />
            </div>
            <div className="flex flex-col w-1/2 mx-auto my-24 items-center justify-center ">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <form
                    className="flex flex-col  "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <label htmlFor="email" className="mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                            },
                        })}
                        className={`border border-gray-400 p-2 rounded-md mb-4 ${errors.email ? "border-red-500" : ""
                            }`}
                    />
                    {errors.email && (
                        <span className="text-red-500 mb-4">{errors.email.message}</span>
                    )}
                    <label htmlFor="password" className="mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        className={`border border-gray-400 p-2 rounded-md mb-4 ${errors.password ? "border-red-500" : ""
                            }`}
                    />
                    {errors.password && (
                        <span className="text-red-500 mb-4">{errors.password.message}</span>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                    {loginError && <p className="text-red-500">Error: {loginError}</p>}
                    <div className="divider">OR</div>

                </form>
                <button
                    type="submit"
                    onClick={handleGoogleLogin}
                    className=" w-full bg-gray-300  text-white rounded-md px-4 py-2 font-medium hover:bg-blue-600 transition duration-200"
                >
                    <FaGoogle className="text-gray-900 mx-auto text-2xl"></FaGoogle>
                </button>
            </div>

        </div>
        </div>
    );
};

export default Login;