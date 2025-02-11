import React from 'react';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className='w-60 min-h-screen bg-slate-300'>
                <p className='text-7xl'>Test</p>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashBoard;