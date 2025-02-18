import React from 'react';
import StudentNavbar from '../components/StudentNavbar';

const ProjectPartner = () => {
    return (
        <div>
            <StudentNavbar/>
           <div className='w-full h-screen flex items-center justify-center flex-col'>
                <h1>Project Partner</h1>
                <p>Welcome to the Project Partner page.</p>
           </div>
        </div>
    );
};

export default ProjectPartner;