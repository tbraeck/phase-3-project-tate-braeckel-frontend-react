import React from 'react'
// import { NavLink } from 'react-router-dom'

function SubjectList({name, description, resources, link}) {
  return (
    <div>
                      <ul>
                    <div className="subjectCards">

                        <div className="cards">
                            <h1> Subject Name: {name}</h1>
                            <h1>Link to subject Page: {link}</h1>
                            <hi>{resources}</hi>
                            <h2> Description: {description}</h2>
                            
                        
                        </div>

                    </div>


                </ul>

    </div>
  )
}

export default SubjectList
