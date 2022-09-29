import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import AsideCart from '../AsideCart/AsideCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';




const Activities = () => {
    const [activities, setActivities] = useState([]);
    
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(activities => setActivities(activities));
    }, [])



    return (
        <section>
            <div className="flex justify-between">
                <div className='w-4/5'>
                    <h1 className='text-3xl font-bold text-green-800 text-center mt-4'>Our Learning Activities</h1>
                    <p className='text-center text-gray-400 text-sm'>
                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                        <span>Learning is the best way to make a perfect man.</span>
                    </p>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-4 my-8'>
                        {
                            activities.map(activity => <Activity key= {activity.id} activity = {activity}></Activity>)
                        }
                    </div>
                </div>
                <div className='w-1/5 bg-green-100'>
                    <AsideCart></AsideCart> 
                </div>
            </div>
        </section>
    );
};

export default Activities;