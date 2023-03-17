import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
import Swal from 'sweetalert2';
const MyCommentCard = ({mycomment,refetch}) => {
    const {topicName, comment, date,_id} = mycomment

    const handleDeleteComment =()=>{
        fetch(`http://localhost:5000/mycomment/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Succesfully Deleted!',
                'success'
              )
            refetch()
        })
    }

    return (
        <div className="card  bg-base-100 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title">{topicName}</h2>
                <p>{comment}</p>
                <div className="flex justify-between items-center mt-3">
                    <p>{date}</p>
                    <button
                    onClick={handleDeleteComment}
                     className="btn btn-sm btn-outline text-red-500"
                     ><AiFillDelete></AiFillDelete> 
                     </button>
                </div>
            </div>
        </div>
    );
};

export default MyCommentCard;