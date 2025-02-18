import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'

import HomePage from './pages/HomePage'

import StudentPage from './pages/StudentPage';
import NoticeBoard from './pages/NoticeBoard';
import EventCalendar from './pages/EventCalender';
import Message from './pages/Message';
import ExchangeMaterial from './pages/ExchangeMaterial';
import ProjectPartner from './pages/ProjectPartner';

function App() {


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

  return (
    <div className='master'>
      <div className='cursor w-8 h-8 rounded-full bg-transparent fixed top-2'></div>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/student' element={ <StudentPage/> } />
        <Route path='/student/notice' element={ <NoticeBoard/> } />
        <Route path='/student/event' element={ <EventCalendar/> } />
        <Route path='/student/message' element={ <Message/> } />
        <Route path='/student/exchagematerial' element={ <ExchangeMaterial/> } />
        <Route path='/student/projectpartner' element={ <ProjectPartner/> } />
        <Route path='/test1' element={ <p>testing 1</p> } />
        <Route path='/test2' element={ <p>testing 2</p> } />
      </Routes>
    </div>
  )
}

export default App
