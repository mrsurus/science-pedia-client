import React, { useState } from 'react';
import PostQuestion from './PostQuestion';
import ShowQACard from './ShowQA/ShowQACard';
import ShowQAsec from './ShowQA/ShowQAsec';

const QuestionAnswer = () => {
    return (
        <div className=''>
            <PostQuestion></PostQuestion>
            <ShowQAsec ></ShowQAsec>
        </div>

    );
};

export default QuestionAnswer;