import React from 'react';

const Details = ({data}) => {
    const {name, img, description} = data
    return (
        <div className="hero min-h-screen bg-violet-200">
            
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='' className="max-w-md w-full rounded-lg shadow-2xl" />
                <div className='mr-10 '>
                    <p className='text-3xl font-bold my-3'>{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;