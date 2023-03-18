import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ShowQACard from './ShowQACard';

const ShowQAsec = () => {
    const [questions, setQuestions] = useState([])
    const {handleRefetch} = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://science-pedia-server.vercel.app/questions`)
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [handleRefetch])

    return (
        <div className='m-10 '>
            {
                questions.map(question =>
                    <ShowQACard
                        key={question._id}
                        data={question}></ShowQACard>
                )
            }
        </div>
    );
};

export default ShowQAsec;