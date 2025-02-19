import React from 'react';

import StudentNavbar from '../../components/StudentNavbar';
import FacultySidebar from '../../components/sidebars/FacultySidebar';


const FacultyPage = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <FacultySidebar/>
                <div className='w-[80%] flex items-center justify-center'>
                   <h1>Please select any option to use</h1>
                </div>
            </div>
        </div>
    );
};

export default FacultyPage;