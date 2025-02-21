import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='w-[20%] h-full py-5 bg-gray-50 flex flex-col items-center justify-start '>

            <p className='bg-green-500'>Admin</p>
           
           <Link to={'/admin/addstudent'} className='border-b-[1px] hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Add Student </Link>

            <Link to={'/admin/addteacher'} className='border-b-[1px] hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Add Teacher </Link>

        </div>
    );
};

export default AdminSidebar;