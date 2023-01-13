import { FireTruck} from '@mui/icons-material'
import React from 'react'
import "./services.css"

const Services = ({title, desc}) => {
  return (
    <div className='myLog__services'>
        <div className="myLog__services-content">
            <FireTruck className='myLog__services-content_icon' />
            <h3 className='myLog__services-content_tiltle'>{title}</h3>
            <p className='myLog__services-content_desc'>{desc}</p>
        </div>
    </div>
  )
}

export default Services