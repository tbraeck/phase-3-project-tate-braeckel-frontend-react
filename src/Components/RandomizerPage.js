import React from 'react'
import { useState, useEffect } from 'react'
import RandomCard from './RandomCard'
// import SavedDrawingCards from './SavedDrawingCards'
// import User from './User'

import '../randomizer.css'

function RandomizerPage() {
  const [drawings, setDrawings] = useState([])
  const [oneDrawing, setDrawing] = useState({})
  const [selectedUser, setSelectedUser] = useState({})

  // const [addDrawingToUser, setAddDrawingToUser] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/drawings')
      .then((r) => r.json())
      .then((drawings) => setDrawings(drawings))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((r) => r.json())
      .then((data) => setSelectedUser(data))
  }, [])

  // const usersLink = users.map((user) => <UserLink key={user.id} user={user} />)
  function addNewDrawingToUser(oneDrawing) {
    setSelectedUser([...selectedUser], oneDrawing)
    console.log(oneDrawing, selectedUser)
  }
  function handleRandom() {
    const randomDrawing = drawings[Math.floor(Math.random() * drawings.length)]
    setDrawing(randomDrawing)
    console.log(randomDrawing)
  }

  const handleChange = (e) => {
    setSelectedUser(e.target.value)
    console.log(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault()

    let savedUserDrawings = {
      name: selectedUser.name,
      drawing: oneDrawing,
    }

    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(savedUserDrawings),
    })
      .then((r) => r.json())
      .then((oneNewDrawing) => addNewDrawingToUser(oneNewDrawing))
  }

  // setSelectedUser([...selectedUser], oneDrawing)

  // console.log(oneDrawing, selectedUser)

  //   // i need the state of my random drawing
  //   // i need the state of my selected user
  //   /// how to get random drawing object into user state?

  return (
    <div>
      <br></br>
      <div>
        <div className="randoBtn-container">
          <button type="submit" className="randomDBtn">
            <img src="../PushMe.png" alt="button" onClick={handleRandom} />
          </button>
        </div>

        <br></br>
        <div>
          <RandomCard
            adjective={oneDrawing.adjective}
            noun={oneDrawing.noun}
            adverb={oneDrawing.adverb}
            verb={oneDrawing.verb}
            reason_why={oneDrawing.reason_why}
          />
        </div>
      </div>
      <br></br>
      <div div className="saveForm">
        <form className="formStyle">
          <p className="formP">Student Names</p>
          <select
            name="user"
            onChange={handleChange}
            className="formSelect"
            value={selectedUser}
          >
            <option value="">--Please choose an option--</option>
            <option value="All">All</option>
            <option value="John">John</option>
            <option value="Fred">Fred</option>
            <option value="Tate">Tate</option>
            <option value="Sara">Sara</option>
            <option value="Penelope">Penelope</option>
            <option value="Harper">Harper</option>
            <option value="Samantha">Samantha</option>
            <option value="Karen">Karen</option>
          </select>
          <button onClick={handleClick}>Save Drawing Idea</button>
        </form>
        {/* <ul>{usersLink}</ul> */}
      </div>
      {/* <container>
        <div>
          <h1>{oneDrawing}</h1>
        </div>
      </container> */}
    </div>
  )
}
export default RandomizerPage
