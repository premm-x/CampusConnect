import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-[20%] h-full py-5 bg-gray-50 flex flex-col items-center justify-start '>
           
           <Link to={'/student/notice'} className='border-b-[1px] bg-green-300 hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Notice board </Link>

           <Link to={'/student/event'} className='border-b-[1px] bg-orange-300 hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Event Calender </Link>

            <Link to={'/student/projectpartner'} className='border-b-[1px] bg-orange-300 hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            project partner </Link>

            <Link to={'/student/message'} className='border-b-[1px] bg-orange-300 hover:bg-gray-200 rounded-sm text-xl border-gray-300 w-[90%] h-12 flex items-center justify-center'>
            Message </Link>

        </div>
    );
};

export default Sidebar;