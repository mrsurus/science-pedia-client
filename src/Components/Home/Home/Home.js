import React from 'react';
import Banner from '../Banner/Banner';
import ChatGPT from '../ChatGPT/ChatGPT';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <ChatGPT></ChatGPT>
        </div>
    );
};

export default Home;