import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
// import Resource from './Resource'// import { Link } from 'react-router-dom'

function Subject( ) {
  const [subjects, setSubjects] = useState([])
// const [subjectForm, setSubjectForm] = useState(false)

const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/subjects/${id}`)
    .then((r) => r.json())
    .then((data) => setSubjects(data))
        }, [])

        // console.log(oneSubject
        //   )
          console.log(subjects)

// const resource = oneSubject.resources;
return(
  <div>
    {subjects.map((subject) => {
      return(
        <div key={subject.id}>
          <h1>{subject.name}</h1>
          <h2>{subject.description}</h2>

{
  subject.resources.map(data => (
    <div>
          <h3>{data.name}</h3>
          <h3>{data.description}</h3>
          <h3>{data.url}</h3>
    </div>
  )  )}
        </div>
      )
    })}
</div>
)
  }



export default Subject
