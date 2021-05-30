import React from 'react'

import './styles.scss';

const Badge = props => {
  return (
    <div className="row-flex badge-container container">
      <div className="pic-container">
        <img src={props?.profile_image}/>
      </div>
      <div className="badge-text">
        {props?.username}
      </div>
    </div>
  )
}

export default Badge
