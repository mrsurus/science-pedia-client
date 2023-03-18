
import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';
import AnswerCard from './AnswerCard';

const ShowQACard = ({ data }) => {
    const { user, setHandleRefetch, handleRefetch } = useContext(AuthContext)
    const [answers, setAnswers] = useState([])
    const { name, img, question, email, _id } = data
    console.log(email, user?.email);


    useEffect(() => {
        fetch(`https://science-pedia-server.vercel.app/answers/${_id}`)
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

        fetch('https://science-pedia-server.vercel.app/answers', {
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
                Swal.fire(
                    'Your answer Posted!',
                    'success'
                  )

            })
    }

    const handleDelete = () => {
        fetch(`https://science-pedia-server.vercel.app/questions/${_id}`, {
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
        <div className='my-16  '>
            <div className='inline md:flex  my-3 rounded md:justify-between'>
                <div className="p-4 flex space-x-4">
                    <div className='avater'>
                        <img className=' rounded-full w-8 h-8' src={img} alt={`${name}`} />
                    </div>
                    <div className="flex-1">
                        <div className=" font-medium text-blue-600 text-sm">{name}</div>
                        <div className=" text-2xl font-semibold">{question}</div>
                        {
                            user?.email === email && <button className='mt-3 btn btn-sm btn-outline text-red-500' onClick={handleDelete}><AiFillDelete></AiFillDelete></button>
                        }
                    </div>

                </div>
                <div className=" right-10  md:w-96  m-3">
                    <div className="w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center  shadow-2xl border rounded-full px-4 ">
                                <input type="text" name='answer' className="flex-1 w-full  focus:outline-none" placeholder="Write an answer..." />
                                <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-4/6 mx-auto '>
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