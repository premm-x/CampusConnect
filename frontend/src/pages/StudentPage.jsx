import React from 'react';
import Sidebar from '../components/sidebars/Sidebar';

import StudentNavbar from '../components/StudentNavbar';


const StudentPage = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <Sidebar/>
                <div className='w-[80%] flex items-center justify-center'>
                   <h1>Please select any option to use</h1>
                </div>
            </div>
        </div>
    );
};

export default StudentPage;