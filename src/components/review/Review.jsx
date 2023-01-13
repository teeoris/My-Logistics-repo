import React from 'react'
import "./review.css"

const Review = ({logImg}) => {
  return (
    <div className='myLog__review'>
      <div className="myLog__review-imgWrap">
        <img src={logImg} alt="image" />
      </div>
      <p className='myLog__review-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium placeat eveniet, aut inventore non fugit voluptates at voluptas officiis consequuntur.</p>
    </div>
  )
}

export default Review