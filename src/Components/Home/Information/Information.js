import React from 'react';
import { FaRobot, } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiQuantconnect,SiVirtualbox } from 'react-icons/si';

const Information = () => {
    return (
        <div className='px-10 my-16'>
            <div className='text-center w-5/6 md:w-3/5 mx-auto my-10 Lg:px-16'>
                <p className=' text-3xl my-8 font-bold'>The power of informantion</p>
                <p className='mb-10'>Information is a transformative force that can change the world, fuel innovation, and empower individuals and communities. In today's digital age,
                    access to accurate and timely information is essential for making informed decisions, solving complex problems, and driving progress.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="text w-5/6 mt-10 mx-auto text-right col-span-1 grid grid-rows-2 gap-5">
                    <div className=' flex justify-center lg:justify-end'>
                        <div className=' mr-5 text-center'>
                            <GiArtificialIntelligence className=' w-20 mx-auto flex text-5xl text-blue-500 justify-end'></GiArtificialIntelligence>
                            <p>Artificial Intelligence</p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div> 
                    <div className=' flex justify-center'>
                        <div className='  text-center'>
                            <SiVirtualbox className=' w-20 mx-auto flex text-5xl text-blue-500 justify-end'></SiVirtualbox>
                            <p>Virtual Reality </p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div className=" hidden lg:inline-block col-span-1 p-5">
                    <img alt="Sample"
                        src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg"
                        className="mx-auto  w-[450px] h-[450px] rounded-full shadow-md" />
                </div>
                <div className="col-span-1 mt-10 grid grid-rows-2 gap-5">
                    <div className=' flex justify-center lg:justify-start '>
                        <div className=' ml-5 text-center'>
                            <FaRobot className=' w-20 mx-auto flex text-5xl text-blue-500 justify-end'></FaRobot>
                            <p>Robotics</p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className=' flex justify-center '>
                        <div className='  text-center lg:mr-5'>
                            <SiQuantconnect className=' w-20 mx-auto flex text-5xl text-blue-500 justify-end'></SiQuantconnect>
                            <p>Quantam computing</p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;