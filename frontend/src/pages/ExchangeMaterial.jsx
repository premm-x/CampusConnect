import React from 'react';
import StudentNavbar from '../components/StudentNavbar';

const ExchangeMaterial = () => {
    return (
        <div>
            <StudentNavbar/>
            <div className='w-full h-screen flex items-center justify-center flex-col'>
                <h1>Exchange Material Page</h1>
                <p>Welcome to the Exchange Material page.</p>
            </div>
        </div>
    );
};

export default ExchangeMaterial;