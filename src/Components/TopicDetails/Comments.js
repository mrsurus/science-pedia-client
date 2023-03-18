import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CommentCard from './CommentCard';
import { actions } from '../../Store/comment-slice';
import { useDispatch } from 'react-redux';

const Comments = ({ tdata}) => {
    const {name} = tdata
    const {handleRefetch} = useContext(AuthContext)
    const dispatch = useDispatch()
    const {data: comments=[], refetch} = useQuery({
        queryKey:['comments'],
        queryFn: async() => {
            const res = await fetch(`https://science-pedia-server.vercel.app/comment/${name}`)
            const data = res.json()
            return data
        }
        
    })
    if(handleRefetch || !handleRefetch){
        refetch()
    }
    if(comments.length === 0){
        return <p className='my-12 text-2xl text-center'>No Comments were added</p>
    }

    dispatch(actions.setComment(comments.length))

    return (
        <div className='my-10 w-4/5 mx-auto'>
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