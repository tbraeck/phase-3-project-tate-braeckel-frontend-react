import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
// import RandomizerPage from './RandomizerPage'
// import User from './User'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'
import Subjects from './Subjects'
function App() {
  // function addNewDrawing(oneDrawing) {
  //   setUsers([...users.id, oneDrawing])
  // }
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="routes">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          {/* <Route path="/savedDrawings" element={<SavedDrawingCards />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
