import { Camera, Computer, Facebook, FoodBank, Handshake, House, Instagram, Pinterest, Star, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='myLog__footer'>
      <div className="myLog__footer-content">
        <div className="myLog__footer-content_row1">
          <div className="myLog__footer-content_row1-col1">
            <p className="myLog__footer-content_row1-col1_title">let us help you</p>
            <div className="myLog__footer-content_row1-col1_item">
              <p><a href="#lorem">Lorem, ipsum.</a></p>
              <p><a href="#lorem">Lorem ipsum dolor sit.</a></p>
              <p><a href="#lorem">Lorem, ipsum.</a></p>
              <p><a href="#lorem">Lorem ipsum dolor</a></p>
              <p><a href="#lorem">Lorem, ipsum </a></p>
              <p><a href="#lorem">Lorem, ips</a></p>
              <p><a href="#lorem">Lorem ipsum dolor sit amet.</a></p>
              <p><a href="#lorem">Lorem, ipsum.</a></p>
            </div>
          </div>
          <div className="myLog__footer-content_row1-col2">
            <p className="myLog__footer-content_row1-col2_title">Make money with us</p>
            <div className="myLog__footer-content_row1-col2_item">
              <p><a href="#lorem">Lorem, ipsum dolor.</a></p>
              <p><a href="#lorem">Lorem, ipsum.</a></p>
              <p><a href="#lorem">Lorem ipsum dolor sit amet.</a></p>
              <p><a href="#lorem">Lorem, ipsum.</a></p>
              <p><a href="#lorem">Lorem ipsum dolor sit.</a></p>
              <p><a href="#lorem">Lorem, ipsum.</a></p>
              <p><a href="#lorem">Lorem, ipsum dolor.</a></p>
              <p><a href="#lorem">Lorem, ipsum.</a></p>
            </div>
          </div>
        </div>
        <div className="myLog__footer-content_row2">
          <p className="myLog__footer-content_row2-title">get to know us</p>
          <div className="myLog__footer-content_row2-item">
            <p><a href="#lorem">Lorem, ipsum.</a></p>
            <p><a href="#lorem">Lorem ipsum dolor sit.</a></p>
            <p><a href="#lorem">Lorem, ipsum.</a></p>
            <p><a href="#lorem">Lorem ipsum dolor</a></p>
            <p><a href="#lorem">Lorem, ipsum </a></p>
            <p><a href="#lorem">Lorem, ips</a></p>
            <p><a href="#lorem">Lorem ipsum dolor sit amet.</a></p>
            <p><a href="#lorem">Lorem, ipsum.</a></p>
          </div>
        </div>
        <div className="myLog__footer-content_row3">
          <p className="myLog__footer-content_row3-title">delviz international</p>
          <div className="myLog__footer-content_row3-item">
            <p><a href="#lorem">Loremoop</a></p>
            <p><a href="#lorem">Lorem</a></p>
            <p><a href="#lorem">Lorem, ipsum.</a></p>
            <p><a href="#lorem">Lorem dolor</a></p>
            <p><a href="#lorem">Lorem</a></p>
            <p><a href="#lorem">Lorem, ips</a></p>
            <p><a href="#lorem">Lorem </a></p>
            <p><a href="#lorem">Lorem</a></p>
            <p><a href="#lorem">Lorem, ips</a></p>
            <p><a href="#lorem">Lorem </a></p>
            <p><a href="#lorem">Lorem</a></p>
          </div>
        </div>
        <div className="myLog__footer-content_row4">
          <div className="myLog__footer-content_row4-col1">
            <p className="myLog__footer-content_row4-col1_title">join us on</p>
            <div className="myLog__footer-content_row4-col1_socials">
              <YouTube className='myLog__footer-content_row4-col1_socials-icon' />
              <Facebook className='myLog__footer-content_row4-col1_socials-icon' />
              <Instagram className='myLog__footer-content_row4-col1_socials-icon' />
              <Twitter className='myLog__footer-content_row4-col1_socials-icon' />
              <Pinterest className='myLog__footer-content_row4-col1_socials-icon' />
              <Camera className='myLog__footer-content_row4-col1_socials-icon' />
              <Star className='myLog__footer-content_row4-col1_socials-icon' />
            </div>
          </div>
          <div className="myLog__footer-content_row4-col2">
            <p className="myLog__footer-content_row4-col2_title">Delviz group</p>
            <div className="myLog__footer-content_row4-col2_details">
              <p>Delviz<span><House /></span>house</p>
              <p>Delviz<span><Handshake /></span>deals</p>
              <p>Delviz<span><FoodBank /></span>Food</p>
              <p>Delviz<span><Computer /></span>tv</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer