import React from 'react';
import Banner from '../Banner/Banner';
import Premium from '../Premium/Premium';
import Topics from '../Topics/Topics';
import Information from '../Information/Information';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <Information></Information>
            <Premium></Premium>
        </div>
    );
};

export default Home;