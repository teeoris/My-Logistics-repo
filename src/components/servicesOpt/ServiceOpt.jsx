import { SupportAgentRounded } from '@mui/icons-material'
import React from 'react'
import "./serviceOpt.css"

const ServiceOpt = () => {
  return (
    <div className='myLog__serviceOpt'>
        <div className="myLog__serviceOpt-content">
            <div className="myLog__serviceOpt-content_iconWrap">
              <SupportAgentRounded className='myLog__serviceOpt-content_iconWrap-icon' />
            </div>
            <div className="myLog__serviceOpt-content_info">
              <p className="myLog__serviceOpt-content_info-title">contact us</p>
              <p className="myLog__serviceOpt-content_info-mail">mail: logistics.ng@delviz.org</p>
              <p className="myLog__serviceOpt-content_info-call">call / whatsApp: +23? 0000 21450</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceOpt