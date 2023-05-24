import React from 'react'
import { useState, useEffect} from 'react'
// import SubjectLink from './SubjectLink'
// import Subject from './Subject'
import { Link } from 'react-router-dom'
// import SubjectList from './SubjectList'

function SubjectPage() {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
fetch(`http://localhost:9292/subjects`)
.then((r) => r.json())
.then((data) => setSubjects(data))

    }, [])
    // console.log(subjects)

 

return (
  <div>
   <h2>
  {subjects.name}
 </h2>
 {subjects.map((subject) => (
 
  <h2 key={subject.id}>
<Link to={`/subjects/${subject.id}`}>
  {subject.name}
</Link>
  </h2>

 ))}
    </div>
  )
}

export default SubjectPage


