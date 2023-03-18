// import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AiFillHeart, AiFillWechat } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { actionss } from '../../Store/like-slice';

const Details = ({ data }) => {
    const { name, img, description, likes, _id } = data
    const like = useSelector((state) => state.like.like)
    const counter = useSelector((state) => state.like.counter)
    const commentNum = useSelector((state) => state.comment.comment)
    const dispatch = useDispatch()

  useEffect(()=> {
    fetch(`https://science-pedia-server.vercel.app/topic/${_id}`)
    .then(res => res.json())
    .then(res => dispatch(actionss.setprelike(res.likes)))
  },[_id,like,dispatch])


    const handleClicked = () => {
        dispatch(actionss.setLike())

    }
    
    const handleLikeNumber = (num) => {
        const likeInfo = {
            counter: likes + num
        }

        console.log(likeInfo);
        fetch(`https://science-pedia-server.vercel.app/topic/likes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(response => response.json())
            .then((data) => { })
            .catch((error) => {
                console.log(error);
                
            });
    }

    
    if (like === true) {
        handleLikeNumber(1)
    }
    else{
        handleLikeNumber(0)
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
                    onClick={handleClicked}
                    className={` mb-5 flex items-center border bg-white p-2 rounded-md ${like && 'text-red-500'} `} >{counter} loves<AiFillHeart className='ml-1 text-xl'></AiFillHeart><span></span></p>
                <p className=' mb-5 flex items-center bg-white p-2 rounded-md'>{commentNum} comments<AiFillWechat className='ml-1 text-xl'></AiFillWechat></p>
            </div>
        </div>
    );
};

export default Details;