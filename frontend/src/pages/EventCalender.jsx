import React from 'react';
import Sidebar from '../components/sidebars/Sidebar';
import Calender from '../components/Calender';

import StudentNavbar from '../components/StudentNavbar';

const EventCalendar = () => {
    return (
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <Sidebar/>
                <div className=' w-[80%] bg-slate-300  text-white p-4 '>  {/*bg-[#1a1f25]*/}
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-2xl text-center font-semibold mb-6">Calendar</h1>
                        <Calender />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCalendar;

