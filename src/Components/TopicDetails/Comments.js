import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CommentCard from './CommentCard';


const Comments = ({ tdata, crefetch}) => {
    const {name} = tdata

    const {data: comments=[], refetch} = useQuery({
        queryKey:['comments'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/comment/${name}`)
            const data = res.json()
            return data
        }
        
    })
    if(crefetch && !crefetch){
        refetch()
    }
    if(comments.length === 0){
        return <p className='my-12 text-2xl text-center'>No Comments were added</p>
    }
    return (
        <div>
            {
                comments?.map(comment => 
                <CommentCard 
                key={comment._id}
                data={comment}>

                </CommentCard>)
            }
        </div>
    );
};

export default Comments;