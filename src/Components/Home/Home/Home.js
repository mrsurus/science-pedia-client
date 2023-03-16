import React from 'react';
import Banner from '../Banner/Banner';
import ChatGPT from '../ChatGPT/ChatGPT';
import Premium from '../Premium/Premium';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <ChatGPT></ChatGPT>
            <Premium></Premium>
        </div>
    );
};

export default Home;