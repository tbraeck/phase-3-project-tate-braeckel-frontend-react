import React from 'react'
import { useState, useEffect} from 'react'
import SubjectList from './SubjectList'

function Subjects() {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
fetch(`http://localhost:9292/subjects`)
.then((r) => r.json())
.then((data) => setSubjects(data))

    }, [])
    console.log(subjects)

    // useEffect(() => {
    //     fetch(`http://localhost:8000/artwork`)
    //         .then((r) => r.json())
    //         .then(artArray => setArt(artArray))
    // }, [])
  return (
    <div>
        <ul className='subjectList'>
        {subjects.map((subject) => {

return (
    <div className="card"  key={subject.name}>
        <SubjectList
            name={subject.name}
            description={subject.description}
            resources={subject.resources}
            link={subject.link}
        />
    </div>


)
})}
   </ul>
    </div>
  )
}

export default Subjects


