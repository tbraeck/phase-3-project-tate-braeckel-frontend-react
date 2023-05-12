import React from 'react'

function RandomCard({ noun, adjective, verb, adverb, reason_why }) {
  return (
    <div className="cards">
      <li>
        <p>
          Today you will be drawing a(n) <b>{adjective}</b> <b>{noun}</b>&nbsp;
          that (is)
          <b>{verb}</b> <b>{adverb}</b>&nbsp; because they are{' '}
          <b>{reason_why}</b>!
        </p>
      </li>
    </div>
  )
}

export default RandomCard
