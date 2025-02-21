import React from 'react';
import StudentSidebar from '../../components/sidebars/StudentSidebar';

import StudentNavbar from '../../components/StudentNavbar';


const StudentPage = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <StudentSidebar/>
                <div className='w-[80%] flex items-center justify-center'>
                   <h1>Please select any option to use</h1>
                </div>
            </div>
        </div>
    );
};

export default StudentPage;