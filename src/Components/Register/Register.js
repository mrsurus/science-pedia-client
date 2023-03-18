import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {  useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";



const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_Key
    const [createEmail, setCreateEmail] = useState('')
    const [token] = useToken(createEmail)
    const { createUser, updateNamePhoto } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from, { replace: true })
    }
    
    const onSubmit = (data) => {
        //upload img to imgbb
        const formData = new FormData();
        const image = data.image[0]
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`

        const email = data.email
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    const imageUrl = imgData.data.url
                    console.log(imageUrl);
                    //sign up
                    if (imageUrl) {
                        createUser(data.email, data.password)
                            .then(res => {
                                console.log(res.user);

                                updateNamePhoto(data.name, imgData.data.url)
                                    .then(res => {
                                        console.log('display uppdates')
                                        const user = {
                                            name: data.name,
                                            email: data.email,
                                            photoURL: imageUrl
                                        }

                                        fetch('https://science-pedia-server.vercel.app/users', {
                                            method: 'POST',
                                            headers: {
                                                'content-type': 'application/json'
                                            },
                                            body: JSON.stringify(user)
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                console.log(data)
                                                setCreateEmail(email)
                                                
                                                Swal.fire(
                                                    'Good job!',
                                                    'successfully signed up!',
                                                    'success'
                                                  )
                                            })
                                    })
                                    .catch(err => console.log(err))

                            })
                            .catch(err => console.log(err))
                    } else {
                        return;
                    }
                }
            })
    };


    return (
        <div className="flex flex-col items-center justify-center my-24">
            <form
                className="flex flex-col bg-base-400 p-6 rounded-lg shadow-2xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <label htmlFor="name" className="mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                        },
                    })}
                    className={`border border-gray-400 p-2 rounded-md mb-4 ${errors.name ? "border-red-500" : ""
                        }`}
                />
                {errors.name && (
                    <span className="text-red-500 mb-4">{errors.name.message}</span>
                )}
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
                <label htmlFor="image" className="mb-2">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    {...register("image", {
                        required: "image is required",

                    })}
                    // onChange={handleImageChange}
                    className={`border border-gray-400 p-2 rounded-md mb-4 ${errors.image ? "border-red-500" : ""
                        }`}
                />
                {errors.image && <span className="text-green-500 ml-4">Image uploaded!</span>}
                {errors.image && (
                    <span className="text-red-500 mb-4">{errors.image.message}</span>
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
                    <span className="text-red-500 mb-4">
                        {errors.password.message}
                    </span>
                )}
                <button
                    type="submit"
                    className="bg-green-500 text-white rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-200"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register;