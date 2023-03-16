
import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../../Context/AuthProvider';
import AnswerCard from './AnswerCard';

const ShowQACard = ({ data }) => {
    const { user, setHandleRefetch, handleRefetch } = useContext(AuthContext)
    const [answers, setAnswers] = useState([])
    const { name, img, question, email, _id } = data
    console.log(email, user?.email);


    useEffect(() => {
        fetch(`http://localhost:5000/answers/${_id}`)
            .then(res => res.json())
            .then(data => setAnswers(data))
    }, [_id, handleRefetch])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const answer = form.answer.value

        const answerInfo = {
            qId: _id,
            answer: answer,
            email: user?.email,
            name: user?.displayName || 'no name',
            img: user?.photoURL
        }

        fetch('http://localhost:5000/answers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(answerInfo)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                setHandleRefetch(!handleRefetch)

            })
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/questions/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHandleRefetch(!handleRefetch)
            })
    }
    return (
        <div className='my-5'>
            <div className='inline md:flex border my-3 rounded md:justify-between'>
                <div className="p-4 flex space-x-4">
                    <div className='avater'>
                        <img className=' rounded-full w-8 h-8' src={img} alt={`${name}`} />
                    </div>
                    <div className="flex-1">
                        <div className=" font-medium text-blue-600 text-sm">{name}</div>
                        <div className=" text-3xl font-semibold">{question}</div>
                        {
                            user?.email === email && <button className='mt-3 btn btn-sm btn-outline text-red-500' onClick={handleDelete}><AiFillDelete></AiFillDelete></button>
                        }
                    </div>

                </div>
                <div className=" right-10  w-96  m-3">
                    <div className="w-96">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center border rounded-full px-4 ">
                                <input type="text" name='answer' className="flex-1 w-full  focus:outline-none" placeholder="Write an answer..." />
                                <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-4/6 mx-auto '>
                {answers.length=== 0 && <p className='my-5 text-center'>No answer for this question yet</p>}
                {answers.length !== 0 &&
                    answers?.map(answer =>
                        <AnswerCard
                            key={answer._id}
                            data={answer}></AnswerCard>)
                }
            </div>
        </div>
    );
};

export default ShowQACard;