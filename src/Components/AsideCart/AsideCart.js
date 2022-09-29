import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profile from './../img/profile.jpg';

const AsideCart = () => {
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
                            <button className='btn bg-white  border-none text-green-500 hover:bg-green-200 btn-sm mx-2 btn-circle'><span>15</span><sub>s</sub></button>
                            <button className='btn bg-white border-none text-green-500 hover:bg-green-200 btn-sm mx-2 btn-circle'><span>15</span><sub>s</sub></button>
                            <button className='btn bg-white border-none text-green-500 hover:bg-green-200 btn-sm mx-2 btn-circle'><span>15</span><sub>s</sub></button>
                            <button className='btn bg-white border-none text-green-500 hover:bg-green-200 btn-sm mx-2 btn-circle'><span>15</span><sub>s</sub></button>
                        </div>
                    </div>

                    <div className='mt-2 lg:mt-8'>
                        <h2 className='text-sm my-1 text-green-800 font-semibold'>Reading Activities Details</h2>
                        <div className='bg-green-700 p-2 py-4 hover:bg-green-700 glass rounded-xl font-semibold text-white flex justify-around items-center'>
                            <h2 className='text-sm'>Reading Time : </h2>
                            <h5 className='text-sm'><span>200</span> Minutes</h5>
                        </div>
                        <div className='bg-green-700 mt-4 p-2 py-4 hover:bg-green-700 glass rounded-xl font-semibold text-white flex justify-around items-center'>
                            <h2 className='text-sm'>Breaking Time : </h2>
                            <h5 className='text-sm'><span>100</span> Minutes</h5>
                        </div>
                    </div>

                    <div className='mt-2 mb-8 lg:mt-8'>
                        <button className='btn bg-green-800 glass hover:bg-green-900'>Activities Complete</button>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default AsideCart;<h1>Hello Aside</h1>