import React from 'react';

const Blog = () => {
    return (
        <section className='mx-8'>
            <div className='mt-4'>
                <h1 className='text-2xl text-green-600 font-semibold'>01. How does React.js Work?</h1>
                <p className='text-sm text-gray-600 mt-4'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl text-green-600 font-semibold'>02. What is the main difference between Props and State?</h1>
                <p className='text-sm text-gray-600 mt-4'>Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                <p className='text-sm text-gray-600 mt-4'>State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl text-green-600 font-semibold'>Why we can use useEffect?</h1>
                <p className='text-sm text-gray-600 mt-4'>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
            </div>
        </section>
    );
};

export default Blog;