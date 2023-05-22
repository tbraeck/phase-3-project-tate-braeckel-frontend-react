import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'
import Subjects from './SubjectPage'
function App() {
  // function addNewDrawing(oneDrawing) {
  //   setUsers([...users.id, oneDrawing])
  // }
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Dropdown/>
      <div className="routes">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
       
        </Routes>
      </div>
    </div>
  )
}

export default App
