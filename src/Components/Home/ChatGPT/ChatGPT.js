import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
    .post('http://localhost:5000/chat', {prompt})
    .then((res)=>{
      setResponse(res.data);
    })
    .catch((err)=>console.log(err))
  }

  const handleClear =()=>{
    setResponse('')
  }

  return (
    <div className='w-5/6 mx-auto text-center my-16'>
      <form action="" onSubmit={handleSubmit}>
        <input
        className='border border-gray-400 p-2 rounded-md mb-4'
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
         type="text" /><br/>
         <button
         className='btn btn-sm btn-primary  my-3' type='submit'>Ask to ChatGTP

         </button>
      </form>
      
      <div className='relative'>
      {
      response.length !==0 && <button onClick={handleClear} className=' absolute right-2 -top-10  btn-sm btn border-none bg-red-500'>Clear</button>
      }
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatGPT;