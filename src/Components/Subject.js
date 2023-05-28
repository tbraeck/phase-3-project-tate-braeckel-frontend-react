import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Resource from './Resource'
import NewResource from './NewResource'
// import { Link } from 'react-router-dom'

function Subject( ) {
  const [subject, setSubject] = useState({
    resources: []
  })


// const [subjectForm, setSubjectForm] = useState(false)

const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/subjects/${id}`)
    .then((r) => r.json())
    .then((data) => setSubject(data))
        }, [])

       
  console.log(subject.resources)
const resources = subject.resources.map(res => <Resource key={res.id} resource={res}/>)
 
  return(
    <div>
      <br/>
    {/* <h1>I am a subject</h1> */}
    <h1>Subject: </h1>
    <h1>{subject.name}</h1>
    <br/>
    <h1>Description: </h1>
    <h1>{subject.description}</h1>
    <br/>
    <h1>Resources: </h1>
  
   {resources}
   <NewResource/>
    </div>
    )
    
 

  
}

export default Subject
