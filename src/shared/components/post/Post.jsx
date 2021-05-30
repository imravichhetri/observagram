import React from 'react'
import Badge from '../badge'
import Comments from '../comments';
import CommentInput from '../comments/CommentInput';

import './styles.scss';

const Post = ({selectedData,selectedUser, comments}) => {

  return (
    <div className="post-container row-flex full-width">
      <div>
        <img src={selectedData?.image_url} alt="Post"/>
      </div>
      <div>
        <Badge {...selectedUser}/>
        <Comments comments={comments}/>
        <CommentInput/>
      </div>
    </div>
  )
}


export default Post
