import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'daisyui';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const CommentBox = ({tdata}) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState, reset } = useForm();
    const { isSubmitting } = formState;
    console.log(user);
    const onSubmit = (data) => {
        const commentInfo = {
            topicName: tdata.name,
            name: data.name || 'No Name',
            email: user?.email,
            comment: data.comment,
            photo: user?.photoURL || 'No Photo',
            date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        }
         
        fetch(`http://localhost:5000/comment`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                reset()
            }
        })
    };

    if(!user?.uid){
        return <div> 
            <p className='text-center my-16'>Please <Link to ='/login' className=' underline text-blue-500 text-xl'>Log In</Link> to share your openion</p>
        </div>
    }

    return (
        <div>
            <p className='text-2xl text-center'>Write your valuable openion in the comment box.</p>
            <form className='w-96 mx-auto bg-violet-400 p-7 rounded my-5 text-center' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="">Your Name</label><br />
                    <input
                        label="Name"
                        className='border border-violet-500 w-full pl-2 rounded pb-3 mts-2 '
                        placeholder="Enter your name"
                        defaultValue={user?.displayName}
                        {...register("name", { required: true })}
                    />
                </div>
                <div className="mb-4 ">
                    <label htmlFor="">Write Your Comment</label>
                    <textarea
                        label="Comment"
                        className='w-full border border-violet-500 h-24 p-2 text-sm rounded-md  mt-2'
                        placeholder="Enter your comment"
                        {...register("comment", { required: true })}></textarea>
                </div>
                <div className='text-center'>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary btn-sm btn w-24 mx-auto "
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentBox;