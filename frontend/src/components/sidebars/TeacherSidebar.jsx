import React from 'react';
import { Link } from 'react-router-dom';

const TeacherSidebar = () => {
    return (
        <div className='w-[20%] h-full py-5 bg-gray-50 flex flex-col items-center justify-start '>

            <p className='bg-green-400'>Teacher</p>
           
           <Link to={'/teacher/notice'} className='border-b-[1px] hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Notice board </Link>

           <Link to={'/teacher/event'} className='border-b-[1px]  hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Event Calender </Link>

            <Link to={'/teacher/message'} className='border-b-[1px]  hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Message </Link>

        </div>
    );
};

export default TeacherSidebar;