import React from 'react';
import StudentNavbar from '../components/StudentNavbar';

const Message = () => {
    return (
        <div>
            <StudentNavbar/>
            <div className='w-full h-screen flex items-center justify-center flex-col'>
                <h1>Message Page</h1>
                <p>This is the message page.</p>
            </div>
        </div>
    );
};

export default Message;