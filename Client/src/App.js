import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import AddStudent from './components/dbPages/AddStudent';
import StudentDB from './components/dbPages/StudentDB';
import EditStudent from './components/dbPages/EditStudent';
import First from './components/First'

const App = () => {
  const loggedfn = window.localStorage.getItem("isLogged");
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={loggedfn ? <StudentDB/> : <First/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<SignUpPage/>} />
          <Route path='/students' element={<StudentDB/>} />
          <Route path='/add_student' element={<AddStudent/>} />
          <Route path='/student/edit/:id' element={<EditStudent/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App