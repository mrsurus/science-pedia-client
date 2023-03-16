import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyCommentCard from './MyCommentCard';

const MyComment = () => {
    const { user } = useContext(AuthContext)

    const { data: mycomments = [],refetch } = useQuery({
        queryKey: ['mycomment'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mycomment?email=${user?.email}`)
            const data = res.json()
            return data;
        }

    })
    console.log(mycomments);
    return (
        <div>
            <p className='text-center bg-black text-white pt-10 font-bold text-2xl'>You have palced {mycomments.length} comments</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-12 bg-black'>
                {
                    mycomments?.map(mycomment =>
                        <MyCommentCard
                            key={mycomment._id}
                            refetch={refetch}
                            mycomment={mycomment}>

                        </MyCommentCard>)
                }
            </div>
        </div>
    );
};

export default MyComment;