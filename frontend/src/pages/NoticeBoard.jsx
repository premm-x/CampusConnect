import React from 'react';
import Sidebar from '../components/sidebars/Sidebar';

import StudentNavbar from '../components/StudentNavbar';
import StudentNoticePage from '../components/StudentNoticePage';

const NoticeBoard = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <Sidebar/>
                <div className=' w-[80%] flex items-center justify-center'>
                    <StudentNoticePage/>
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;