import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CommentBox from './CommentBox';
import Comments from './Comments';
import Details from './Details';

const TopicDetails = () => {
    const data = useLoaderData()
    const [crefetch, setCrefetch] = useState(false)

   
    return (
        <div>
            <Details data={data}></Details>
            <Comments 
                tdata={data}
                crefetch={crefetch}
            ></Comments>
            <CommentBox
                setCrefetch={setCrefetch}
                tdata={data}
                >
            </CommentBox>
        </div>
    );
};

export default TopicDetails;