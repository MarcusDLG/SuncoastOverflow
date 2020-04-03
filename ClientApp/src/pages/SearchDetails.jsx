import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const SearchDetails = props => {
  const { results } = props
  console.log(results)
  console.log(results.id)

  return (
    <li className="question-asked">
      <aside className="upvote-comments">
        <section className="upvotes">
          <p className="upvote-count">0</p>
          <FontAwesomeIcon icon={faCaretUp} className="upvote-icon" />
        </section>
        <section className="comments">
          <p className="comments-count">0</p>
          <FontAwesomeIcon icon={faCommentDots} className="comments-icon" />
        </section>
      </aside>
      <div className="question-container">
        <a className="question-text" href="">
          {results.title}
        </a>
        <div className="category-container">
          <a href="" className="category">
            {results.tag}
          </a>
        </div>
        <div className="time-author-container">
          <p className="time-text">30 secs ago</p>
          <a className="author-text" href="">
            CleverGirl
          </a>
        </div>
      </div>
    </li>
  )
}

export default SearchDetails
