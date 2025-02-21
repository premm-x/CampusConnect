import image from '../assets/image.png'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap'
import { useEffect } from 'react';

const HomePage = () =>{

    // cursor function
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
  
        const handleMouseMove = (event) => {
          cursor.style.backgroundColor = 'black';
          gsap.to(cursor, {
            x: event.x,
            y: event.y,
          });
        };
  
        document.addEventListener('mousemove', handleMouseMove);
  
      }, []);

    return(
        <div className="w-full ">
            <div className='cursor w-8 h-8 rounded-full bg-transparent fixed top-2'></div>

            <section className="w-full h-screen bg-gray-100">
                <header className="w-full h-14 px-8 py-4  flex items-center justify-center">
                    <nav className="w-full flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">Campus</h1>
                        <div className="flex items-center justify-center gap-7">
                            <a href="" className="hover:underline">Chat</a>
                            <a href="" className="hover:underline">Visit</a>
                            <a href="" className="hover:underline">Notice</a>
                        </div>
                        <button className="bg-black hover:bg-gray-500 px-6 py-2 rounded-full text-white">Sign Up</button>
                    </nav>
                </header>

                <main className="w-full  h-full flex items-center justify-start">
                    <div className="ml-10">
                        <p className="text-6xl font-semibold mb-4">Hello, <span className="font-bold">Buddy!</span></p>
                        <p className="text-6xl font-semibold">Let's Connect with your campus..</p>
                    </div>
                </main>
            </section>

            <section className="w-full h-screen bg-gray-200 flex items-center justify-between flex-col">
                <h1 className="text-4xl font-semibold mt-8">Select your Self</h1>

                <div className="flex items-center h-full justify-center flex-col gap-8">
                    <Link to={'/student'} className="bg-black mr-28 text-white text-3xl font-semibold rounded-full px-10 py-2">
                        Student</Link>
                    <Link to={'/teacher'} className="bg-white ml-28 text-black text-3xl font-semibold rounded-full px-10 py-2">
                        Teacher</Link>
                    <Link to={'/admin'} className="bg-black mr-28 text-white text-3xl font-semibold rounded-full px-10 py-2">
                        Admin</Link>
                </div>

            </section>


            <section className="w-full h-screen bg-gray-200 flex items-center justify-center">
                <h1 className='z-10'>Over view and explain the features</h1>
            </section>


            <section className="w-full h-screen bg-gray-300 object-cover object-center">
                <h1 className='text-center'>similar image type theame here</h1>
                <img className='w-full h-full ' src={image} />
            </section>
        </div>
    )
}

export default HomePage;