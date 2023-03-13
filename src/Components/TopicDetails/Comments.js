import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CommentCard from './CommentCard';


const Comments = ({tdata}) => {
    const {name,} = tdata

    const {data: comments=[]} = useQuery({
        queryKey:['comments'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/comment/${name}`)
            const data = res.json()
            return data
        }
        
    })
    console.log(comments)
    return (
        <div>
            {
                comments?.map(comment => 
                <CommentCard 
                key={comment._id}
                comments={comment}>

                </CommentCard>)
            }
        </div>
    );
};

export default Comments;