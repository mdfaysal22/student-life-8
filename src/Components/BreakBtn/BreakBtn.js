import React from 'react';

const BreakBtn = (props) => {
    const {time} = props.times;
    return (
        <div>
            <button onClick={() => {props.breakTimeAdd(time)}} className='btn bg-white border-none text-green-500 hover:bg-green-200 btn-sm mx-2 btn-circle'><span>{time}</span><sub>s</sub></button>
        </div>
    );
};

export default BreakBtn;