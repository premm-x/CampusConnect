import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Users, MessagesSquare, User, LogOut } from "lucide-react";
import { X } from "lucide-react";

const Sidebar = () => {

    const menuItems = [
            { icon: Bell, text: 'Notice board', active: true, link: '/student/notice' },
            { icon: Calendar, text: 'Event Calendar', active: false, link: '/student/event' },
            { icon: Users, text: 'Project Partner', active: false, link: '' },
            { icon: MessagesSquare, text: 'Message', active: false, link: '/student/message' },
            { icon: User, text: 'Group Message', active: false, link: '/student/groupmessage' },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gray-100 w-[20%] py-4 flex flex-col items-center justify-between">
            <nav className="space-y-1">
                {menuItems.map((item, index) => (
                    <Link to={item.link}
                    key={index}
                    onClick={item.text === "Project Partner" ? () => setOpen(true) : undefined}
                    className={`w-full flex items-center gap-4 px-4 py-3 text-lg font-medium rounded-lg  ${
                        item.active
                        ? 'bg-primary text-black'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.text}
                    </Link>
                ))}
            </nav>

            <div className='w-full px-9'>
                <Link className='w-full gap-6 flex text-gray-600 hover:bg-gray-200 py-3 items-center justify-center  text-lg font-medium rounded-lg' 
                    to={'/'}>
                       <p>Logout</p> <LogOut/>
                    </Link>
            </div>

            {open && (
                <div className="fixed z-50 inset-0 bg-black bg-opacity-[0.8] backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <div className="flex justify-between items-center mb-4 relative">
                        <h2 className="text-xl text-black font-semibold">Project Options</h2>
                        <button onClick={() => setOpen(false)} className="p-2 absolute -top-4 -right-4">
                            <X color={'black'} size={20} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 py-2">
                        <Link to={'/student/projectpartner/viewproject'} 
                            className="border text-center border-gray-300 hover:bg-indigo-100 text-black p-2 rounded"
                            > View Projects</Link>
                        <Link to={'/student/projectpartner/creatingproject'} 
                            className="border text-center border-gray-300 hover:bg-indigo-100 text-black p-2 rounded"
                            >Create Project</Link>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;


