import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="linkButtons">
      <div>
        <NavLink
          to="/home"

        >
          <button className="btnStyle" type="button">
            Home
          </button>
        </NavLink>
        <NavLink
          to="/randomizer"

        >
          <button type="button" className="btnStyle">
            Subjects          </button>
        </NavLink>
        {/* <NavLink
          to="/savedDrawings"

        >
          <button type="button" className="btnStyle">
            Saved Drawing Ideas
          </button>
        </NavLink> */}
        {/* <NavLink
          to="/userform"
          style={{
            // marginRight: '100px',
            width: '100%',
            fontSize: '24px',
            color: '#f3a84c',
          }}
          // activeStyle={{
          //   background: 'black',
          //   color: '#F2A68D',
          //   borderRadius: '5px',
          //   padding: '3px',
          // }}
        >
          <button type="button" className="btnStyle">
            Sign Up / Login
          </button>
        </NavLink> */}

        {/* <div style={{ backgroundImage: 'url(/public/Dog_Gif.gif)' }}></div> */}
      </div>
      {/* <div className="randoButton">
        <button>
          Random Drawing Idea Generator
          {<RandomizerPage drawings={drawings} setDrawings={setDrawings} />}
        </button>
      </div> */}
    </div>
  )
}

export default NavBar
