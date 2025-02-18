import React from 'react';
import Sidebar from '../components/Sidebar';

import StudentNavbar from '../components/StudentNavbar';

const NoticeBoard = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <Sidebar/>
                <div className=' w-[80%] flex items-center justify-center'>
                    <h1>This is Notice Board</h1>
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;