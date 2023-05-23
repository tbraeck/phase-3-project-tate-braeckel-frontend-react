import React from 'react'
import { useState, useEffect } from 'react'
import Resource from './Resource'// import { Link } from 'react-router-dom'

function Subject( ) {
  const [subject, setSubject] = useState({
    resources: []
  })
const [subjectForm, setSubjectForm] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:9292/subjects/${subject.id}`)
    .then((r) => r.json())
    .then((data) => setSubject(data))
        }, [])

        console.log(subject)


return(
  <div>
 <h2>
  {subject.name}
 </h2>
</div>
  )
}

export default Subject
