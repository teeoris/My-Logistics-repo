import {Android, Apple, StarRounded } from '@mui/icons-material'
import React from 'react'
import "./signup.css"

const Signup = () => {
  return (
    <div className='myLog__sign'>
      <div className="myLog__signup-content">
        <div className="myLog__signup-content_left">
          <div className="myLog__signup-content_left-starIconWrap">
            <StarRounded className='myLog__signup-content_left-starIconWrap_starIcon'/>
          </div>
          <div className="myLog__signup-content_left-desc">
            <p>get access to all exclusive offers,discounts and deals!</p>
            <div className="myLog__signup-content_left-desc_os">
              <p>free download now</p>
              <div className="myLog__signup-content_left-desc_os-iconWrap">
                <Android className='myLog__signup-content_left-desc_os-iconWrap_icon'/>
                <Apple className='myLog__signup-content_left-desc_os-iconWrap_icon'/>
              </div>
            </div>
          </div>
        </div>
        <div className="myLog__signup-content_right">
          <p className='myLog__signup-content_right-title'>New to DELVIZ?</p>
          <p className='myLog__signup-content_right-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quod debitis perspiciatis.</p>
          <div className="myLog__signup-content_right-inputWrap">
            <input type="email" placeholder='Type your Email here...' />
            <button className='myLog__signup-content_right-input_btn'>Male</button>
            <button className='myLog__signup-content_right-input_btn'>Female</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup