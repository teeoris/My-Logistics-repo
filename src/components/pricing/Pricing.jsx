import React from 'react'
import "./pricing.css"

const Pricing = ({title, location, smallTitle, smallPrice, mediumTitle, mediumPrice, largeTitle, largePrice, extraLargeTitle, extraLargePrice}) => {
  return (
    <div className='myLog__pricing'>
      <div className="myLog__pricing-content">
        <div className="myLog__pricing-content_title">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <div className="myLog__pricing-content_colWrap">
          <div className="myLog__pricing-content_col">
            <p className='myLog__pricing-content_col-title'>{smallTitle}</p>
            <p className="myLog__pricing-content_col-amount">{smallPrice}</p>
            <span className='myLog__pricing-content_col-line'></span>
          </div>
          <div className="myLog__pricing-content_col">
            <p className='myLog__pricing-content_col-title'>{mediumTitle}</p>
            <p className="myLog__pricing-content_col-amount">{mediumPrice}</p>
            <span className='myLog__pricing-content_col-line'></span>
          </div>
          <div className="myLog__pricing-content_col">
            <p className='myLog__pricing-content_col-title'>{largeTitle}</p>
            <p className="myLog__pricing-content_col-amount">{largePrice}</p>
            <span className='myLog__pricing-content_col-line'></span>
          </div>
          <div className="myLog__pricing-content_col">
            <p className='myLog__pricing-content_col-title'>{extraLargeTitle}</p>
            <p className="myLog__pricing-content_col-amount">{extraLargePrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing