import React from 'react'
import { useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

function SubjectPage() {
    const [subjects, setSubjects] = useState([])
    const [newResource, setNewResource] = useState([]);

    function addNewResource(oneResource) {
      setNewResource([...subjects, oneResource])
    }
      // console.l

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
<Link to={`/subjects/${subject.id}`} addNewResource={addNewResource} newResource={newResource}>
  {subject.name}
</Link>
  </h2>
  

 ))}



    </div>
  )
}

export default SubjectPage


