import React from 'react'

import HumanizeDuration from 'humanize-duration';

import './styles.scss';

const Comment = props => {
  return (
    <li className="comment-container row-flex">
      <div className="pic-container">
        <img src={props?.author_node?.profile_image}/>
      </div>
      <div className="comment-content-container col-flex flex1">
        <div>
          <div>
            <b>{props?.author_node?.author}</b> &nbsp;<span>{props?.text}</span>
          </div>
        </div>
        <div className="comment-stats">
          <span>{HumanizeDuration((new Date().valueOf())-(props?.created_at),{largest:1})}</span>
          <span>0 likes</span>
        </div>
      </div>
      <div>♡</div>
    </li>
  )
}



export default Comment
