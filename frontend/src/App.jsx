import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

import StudentPage from './pages/StudentPage';
import NoticeBoard from './pages/NoticeBoard';
import EventCalendar from './pages/EventCalender';
import Message from './pages/Message';
import ProjectPartner from './pages/ProjectPartner';

import CreateProject from './pages/projectEvents/CreateProject';
import ViewProject from './pages/projectEvents/ViewProject';

import TeacherNoticePage from './components/TeacherNoticePage';
import TeacherPage from './pages/TeacherAllFile/TeacherPage';
import TeacherEvent from './pages/TeacherAllFile/TeacherEvent';
import TeacherMessage from './pages/TeacherAllFile/TeacherMessage';

import FacultyPage from './pages/Faculty/FacultyPage';
import FacultyAddTeacher from './pages/Faculty/FacultyAddTeacher';
import FacultyAddStudent from './pages/Faculty/FacultyAddStudent';

function App() {  

  return (

    <Routes>
      <Route path='/' element={ <HomePage/> } />
      <Route path='/student' element={ <StudentPage/> } />
      <Route path='/student/notice' element={ <NoticeBoard/> } />
      <Route path='/student/event' element={ <EventCalendar/> } />
      <Route path='/student/message' element={ <Message/> } />
      <Route path='/student/projectpartner' element={ <ProjectPartner/> } />
      <Route path='/student/projectpartner/viewproject' element={ <ViewProject/> } />
      <Route path='/student/projectpartner/creatingproject' element={ <CreateProject/> } />

      <Route path='/teacher' element={ <TeacherPage/> } />
      <Route path='/teacher/notice' element={ <TeacherNoticePage/> } />
      <Route path='/teacher/event' element={ <TeacherEvent/> } />
      <Route path='/teacher/message' element={ <TeacherMessage/> } />

      <Route path='/faculty' element={ <FacultyPage/> } />
      <Route path='/faculty/addstudent' element={ <FacultyAddStudent/> } />
      <Route path='/faculty/addteacher' element={ <FacultyAddTeacher/> } />

    </Routes>

  )
}

export default App
