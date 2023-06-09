import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';

const AnswerCard = ({ data }) => {
    const { name, img, answer, email,_id } = data
    const {user,setHandleRefetch,handleRefetch} = useContext(AuthContext)

    const handleDelete = () => {
        fetch(`https://science-pedia-server.vercel.app/answers/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHandleRefetch(!handleRefetch)
                Swal.fire(
                    'Delete succesful!',
                    'success'
                  )
            })
    }
    
    return (
        <div>
            <div className="p-4 my-3 rounded border flex space-x-4 ">
                <div className='avater'>
                    <img className=' rounded-full w-8 h-8' src={img} alt={`${name}`} />
                </div>
                <div className="flex-1">
                    <div className=" font-medium text-xs">{name}</div>
                    <div className="text-gray-500 ">{answer}</div>
                    {
                            user?.email === email && <button 
                            className='mt-3 btn btn-sm btn-outline text-red-500 right-0'
                             onClick={handleDelete}>
                            <AiFillDelete>
                            </AiFillDelete>
                            </button>
                        }
                </div>
            </div>
        </div>
    );
};

export default AnswerCard;