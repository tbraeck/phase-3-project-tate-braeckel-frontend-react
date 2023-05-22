import React from 'react'

function SubjectList({name,description}) {
  return (
    <div>
                      <ul>
                    <div className="subjectCards">

                        <div className="cards">
                            <h1 > Subject Name: {name}</h1>
                            <h2> Description: {description}</h2>
                        
                        </div>

                    </div>


                </ul>

    </div>
  )
}

export default SubjectList
