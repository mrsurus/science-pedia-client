import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const PostQuestion = () => {
    const {user,setHandleRefetch,handleRefetch} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const question = form.question.value

        const questionInfo = {
            question: question,
            email: user?.email,
            name: user?.displayName || 'no name',
            img: user?.photoURL
        }
    
        fetch('http://localhost:5000/questions', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(questionInfo)
        })
        .then(res => res.json())
        .then(data => {
            setHandleRefetch(!handleRefetch)
            form.reset()
            Swal.fire(
                'Good job!',
                'You post a comment!',
                'success'
              )
        })
    }

    return (
        <div className="fixed bottom-0 w-2/3  rounded-md  bg-blue-300 border-t border-gray-200 my-5 py-4">
            <p className='text-center text-2xl font-semibold mb-3'>Ask any question about science.</p>
            <div className="max-w-4xl  mx-auto px-4">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center bg-base-200 border rounded-full px-4 py-2">
                        <input type="text" name='question' className="flex-1 w-full  focus:outline-none" placeholder="Freely ask your Question..." />
                        <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostQuestion;