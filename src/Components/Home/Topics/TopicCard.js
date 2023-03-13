import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
    const { _id, img, name, description } = topic
    return (
        <Link to={`/details/${_id}`}>
            <div className="card bg-base-100 border shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{description.slice(0, 280)}....</p>
                </div>
            </div>
        </Link>
    );
};

export default TopicCard;