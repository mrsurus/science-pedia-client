import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import PremiumCard from './PremiumCard';
import PremiumModal from './PremiumModal';

const Premium = () => {
    const [modalData, setModalData]= useState(null)

    const { data: premiums = [] } = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/premium')
            const data = res.json()
            return data
        }
    })
    console.log(premiums);
    console.log(modalData);
    return (
        <div className='bg-gray-900 my-5 p-10'>
            <p className='text-2xl font-bold text-center my-5 text-white'>Be Our Premium User</p>
            <div className=' grid grid-cols-3 gap-6'>
                {
                    premiums?.map(premium =>
                        <PremiumCard
                        setModalData={setModalData}
                            key={premium._id}
                            premium={premium}
                        >

                        </PremiumCard>)
                }
                {modalData && <PremiumModal premiumdata={modalData}></PremiumModal>}
            </div>
            
        </div>
    );
};

export default Premium;