import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {picture, name, time, button, age, about} = props.activity;
    console.log(name);
    return (
        <div className='mx-1'>
            <div className="card ml-1 bg-green-50 shadow-xl">
                <figure className='card-img'><img src={picture} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400'>Time: <span>{time}</span> min</p>
                    <p className='text-gray-400'>Age: <span>{age}</span> Years</p>
                    <p className='text-xs text-gray-400'>{about}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-block btn-sm bg-green-700 glass border-none hover:bg-green-800">{button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;