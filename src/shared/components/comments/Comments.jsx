import React from 'react'
import Moment from 'moment';

import Comment from './Comment';

const Comments = ({comments}) => {
  return (
    <ul className="comments-container">
      {
        comments?.map(comment=>(
          <Comment key={comment.id} {...comment}/>
        ))
      }
    </ul>
  )
}

export default Comments
