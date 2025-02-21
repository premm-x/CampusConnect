import { useState } from "react";
import StudentSidebar from "../../components/sidebars/StudentSidebar";
import StudentNavbar from "../../components/StudentNavbar";



const GroupMessage = () =>{


    return(
        <div className='w-full'>
           <StudentNavbar/>

            <div className=' w-full h-[91vh] flex'>
                <StudentSidebar/>
                <div className=' w-[80%] flex items-center justify-center'>
                    
                    <h1>Group message</h1>

                </div>
            </div>
        </div>
    )
}

export default GroupMessage;



