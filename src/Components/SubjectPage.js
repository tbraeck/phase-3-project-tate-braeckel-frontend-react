import React from 'react'
import { useState, useEffect} from 'react'
import SubjectLink from './SubjectLink'
import Subject from './Subject'

function SubjectPage() {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
fetch(`http://localhost:9292/subjects`)
.then((r) => r.json())
.then((data) => setSubjects(data))

    }, [])
    console.log(subjects)

   const subjectList = subjects.map(subject => <SubjectLink key={subject.id} subject ={subject} /> )

return (
    <div className="card"  >

<ul>
    {subjectList}
</ul>
<Subject subject={subjectList}/>
    </div>
  )
}

export default SubjectPage


