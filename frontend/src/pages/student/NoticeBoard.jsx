import React from 'react';
import StudentSidebar from '../../components/sidebars/StudentSidebar';

import StudentNavbar from '../../components/StudentNavbar';
import StudentNoticePage from '../../components/StudentNoticePage';

const NoticeBoard = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <StudentSidebar/>
                <div className=' w-[80%] flex items-center justify-center'>
                    <StudentNoticePage/>
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;