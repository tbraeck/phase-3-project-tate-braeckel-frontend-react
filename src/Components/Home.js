import React from 'react'
// import ThemeSwitcher from './ThemeSwitcher'
// import Header from './Header'
// import NavBar from './NavBar'

function Home() {
  return (
    <>
      <div className="dogGifBox">
        <a className="dogImg" href="http://localhost:3000/randomizer">
          <img src="../DogGifRing (3 × 2 in).gif" alt="dogGif" />
        </a>
        <br></br>
        <div>
          <div className="titleBtnHome">
            <h1>⬆⬆RANDOM ART IDEAS⬆⬆</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
