import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import profile from './../img/profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreakBtn from '../BreakBtn/BreakBtn';

const AsideCart = (props) => {

    const notify = () => toast("Wow !!! Activity Complete");
    let totalMin = 0;
    for(const min of props.totalTime){
        totalMin = totalMin + parseInt(min.time);
    }

    const breakTime = [
        {id: 0, time: 15},
        {id: 1, time: 25},
        {id: 2, time: 35},
        {id: 3, time: 45}
    ];

    const [AddBreakTime, setAddBreakTime] = useState(0);
    const breakTimeAdd = (getTime) => {
        setAddBreakTime(getTime);
        localStorage.setItem("time", getTime);

    }
    useEffect(() => {
        const getLocalStoreTime = localStorage.getItem('time');
        setAddBreakTime(getLocalStoreTime);
    },[])
    return (
        <aside className='sticky top-0'>
            <div className='flex flex-col sm:flex-row lg:flex-col items-center pt-4 justify-around'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-start items-center'>
                            <div className="avatar">
                                <div className="w-16  ring ring-white ring-offset-1 rounded-full">
                                    <img src={profile}/>
                                </div>
                            </div>
                            <div className='ml-2'>
                                <h1 className='text-xl text-green-900'>Md Faysal</h1>
                                <p className='text-xs text-gray-400'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <span className='ml-1'>Web Programmer.</span>     
                                </p>
                            </div>
                    </div>

                    <div className='mt-8 shadow-lg bg-green-700 p-2 hover:bg-green-900 glass rounded-xl font-semibold text-white flex justify-around items-center'>
                        <div className='ml-4'>
                            <p className='text-xs text-gray-50'>57 <sub>Kg</sub></p>
                            <h2>Weigth</h2>
                        </div>
                        <div className='ml-4'>
                            <p className='text-xs text-gray-50'>5'5 <sub>Ins</sub></p>
                            <h2>Height</h2>
                        </div>
                        <div className='ml-4'>
                            <p className='text-xs text-gray-50'>22 <sub>Year</sub></p>
                            <h2>Age</h2>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-2 lg:mt-8'>
                        <h2 className='text-2xl my-1 text-green-800 font-semibold'>Add A Break</h2>
                        <div className='bg-green-700 p-2 py-4 hover:bg-green-700 glass rounded-xl font-semibold text-white flex justify-around items-center'>

                            {
                                breakTime.map(times => <BreakBtn key={times.id} breakTimeAdd = {breakTimeAdd} times = {times}></BreakBtn>)
                            }
                            
                        </div>
                    </div>

                    <div className='mt-2 lg:mt-8'>
                        <h2 className='text-sm my-1 text-green-800 font-semibold'>Reading Activities Details</h2>
                        <div className='bg-green-700 p-2 py-4 hover:bg-green-700 glass rounded-xl font-semibold text-white flex justify-around items-center'>
                            <h2 className='text-sm'>Reading Time : </h2>
                            <h5 className='text-sm'><span>{totalMin}</span> Minutes</h5>
                        </div>
                        <div className='bg-green-700 mt-4 p-2 py-4 hover:bg-green-700 glass rounded-xl font-semibold text-white flex justify-around items-center'>
                            <h2 className='text-sm'>Breaking Time : </h2>
                            <h5 className='text-sm'><span>{AddBreakTime}</span> Minutes</h5>
                        </div>
                    </div>

                    <div className='mt-2 mb-8 lg:mt-8'>
                        <button onClick={notify} className='btn bg-green-800 glass hover:bg-green-900'>Activities Complete</button>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default AsideCart;<h1>Hello Aside</h1>