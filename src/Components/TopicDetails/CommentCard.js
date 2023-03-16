import React from 'react';

const CommentCard = ({data}) => {
    const {name, comment, photo} = data
    return (
        <div className="p-4 flex space-x-4">
            <div className='avater'>
            <img className=' rounded-full w-8 h-8'src={photo} alt={`${name}`} />
            </div>
            <div className="flex-1">
                <div className="text-lg font-medium">{name}</div>
                <div className="text-gray-500">{comment}</div>
            </div>
        </div>
    );
};

export default CommentCard;