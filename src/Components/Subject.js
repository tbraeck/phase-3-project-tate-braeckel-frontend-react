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

// let subjects = data;

const theSubjects = subjects.map(subject => {
  return(
    <div>
      <h1>{theSubjects.name}</h1>
  <h2>{theSubjects.description}</h2>

  </div>)

})
return (
  {theSubjects}
)

}

export default Subject
