import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { AiFillLike, AiFillWechat } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { incLikes } from '../../redux/Actions';
import { dicLikes } from '../../redux/Actions';

const Details = ({ data }) => {
    const { name, img, description } = data
    const myState = useSelector((state)=>state.changeTheNumber)
    const dispatch = useDispatch()
    const [like, setLike] = useState('')

    const handleClicked =() =>{
         dispatch(incLikes())
        
    }
    return (
        <div className='min-h-screen bg-violet-200'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' className="max-w-md w-full rounded-lg shadow-2xl" />
                    <div className='mr-10 '>
                        <p className='text-3xl font-bold my-3'>{name}</p>
                        <p>{description}</p>
                    </div>
                </div>              
            </div>
            <div className=' justify-around flex mt-16'>
                    <p 
                    // onClick={()=> dispatch(incLikes())}
                    onClick={handleClicked}
                    onAnimationEnd={()=>dispatch(dicLikes())}
                    className='mr-24 flex items-center border bg-white p-2 rounded-md'>{myState}likes<AiFillLike className='ml-1 text-xl'></AiFillLike><span></span></p>
                    <p className='ml-24 flex items-center bg-white p-2 rounded-md'>Comments<AiFillWechat className='ml-1 text-xl'></AiFillWechat></p>
                </div>
        </div>
    );
};

export default Details;