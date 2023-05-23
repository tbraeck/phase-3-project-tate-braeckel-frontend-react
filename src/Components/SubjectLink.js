import React from 'react'
import { Link } from 'react-router-dom'

function SubjectLink({subject}) {

  return (
    <div>
      <Link to={`/subjects/${subject.id}`}>
        <h3>{subject.name}</h3>
      </Link>
    </div>
  )
}

export default SubjectLink
