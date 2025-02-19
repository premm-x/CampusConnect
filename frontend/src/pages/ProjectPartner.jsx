import React from 'react';
import StudentNavbar from '../components/StudentNavbar';
import { Link } from 'react-router-dom';

const ProjectPartner = () => {
    return (
        <div className=''>
            <StudentNavbar/>
            <div className='w-full h-[calc(100vh-56px)] flex items-center justify-center flex-col'>
                <Link to={'/student/projectpartner/viewproject'} className='bg-blue-500 w-56 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
                    View Projects</Link>
                <Link to={'/student/projectpartner/creatingproject'} className='bg-green-500 w-56 text-center text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4'>
                    Create Project</Link>
            </div>
        </div>
    );
};

export default ProjectPartner;