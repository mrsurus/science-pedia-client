import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TopicCard from './TopicCard';

const Topics = () => {

    const { data:topics=[] } = useQuery({
        queryKey: ['topic'],
        queryFn: async () => {
            const res = await fetch('https://science-pedia-server.vercel.app/topic')
            const data = await res.json()
            return data
        }
    })
    console.log(topics);

    return (
        <div className='p-12 bg-gray-900'>
            <div className='px-auto  my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    topics?.map(topic =>
                        <TopicCard
                            key={topic._id}
                            topic={topic}>
                        </TopicCard>)
                }
            </div>
        </div>
    );
};

export default Topics;