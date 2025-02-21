import { Link } from "react-router-dom";


const Idpanel = () =>{


    return(
        <div className='w-full'>

           <header className="w-full h-14  px-8 py-4 flex items-center justify-center">
                <nav className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Campus</h1>
                    <div className="flex items-center justify-center gap-7">
                        <a href="" className="hover:underline">Chat</a>
                        <Link to={'/'} className="hover:underline">Dashboard</Link>
                        <a href="" className="hover:underline">Notice</a>
                    </div>
                </nav>
            </header>

            <div className="w-full h-[calc(100vh-56px)] flex items-center justify-center">
                <h1>ID panel of students</h1>
            </div>
        </div>
    )
}

export default Idpanel;

