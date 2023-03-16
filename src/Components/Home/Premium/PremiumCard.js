import React from 'react';

const PremiumCard = ({ premium, setModalData }) => {
    const { price, name, benefits } = premium
    const handleClicked = () => {
        setModalData(premium)
    }
    return (
        <div className='card '>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
                <div className="bg-gradient-to-r from-base-100  to-gray-500 py-4 px-6">
                    <p className=" card-title flex justify-center btn btn-warning">{name}</p>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">${price}/month</h4>
                    <ul className="list-disc pl-4">
                        {
                            benefits?.map(be => <li key={be}>{be}</li>)
                        }
                    </ul>
                    <div className='my-5'>
                        <label
                            htmlFor="premium-modal"
                            onClick={handleClicked}
                            className="bg-blue-500  text-white hover:bg-blue-600 rounded-lg px-4 py-2 mt-4">
                            Get Premium
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumCard;