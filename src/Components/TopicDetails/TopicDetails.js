import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CommentBox from './CommentBox';
import Comments from './Comments';
import Details from './Details';

const TopicDetails = () => {
    const data = useLoaderData()

    return (
        <div>
            <Details data={data}></Details>
            <Comments tdata={data}></Comments>
            <CommentBox tdata={data}></CommentBox>
        </div>
    );
};

export default TopicDetails;