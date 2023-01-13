import { Close, Menu, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import "./navbarB.css"

const MenuItem = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#Service">Service</a></p>
    <p><a href="#ServiceOptions">Service Options</a></p>
    <p><a href="#Pricing">Pricing</a></p>
    <p><a href="#SignUp">Sign Up</a></p>
  </>
)

const NavbarB = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='myLog__navbarB'>
      <div className="myLog__navbarB-content">
        <div className="myLog_navbarB-content_left">
          <MenuItem />
        </div>
        <div className="myLog_navbarB-content_right">
          <div className="myLog_navbarB-content_right-inputWrap">
            <p className="myLog_navbarB-content_right-text">track your package here</p>
            <input type="text" className='myLog_navbarB-content_right-input' placeholder='Enter Tracking No.(e.g. OT 00000 25555 21450)' />
            <div className="myLog_navbarB-content_right-searchIcon">
              <Search />
            </div>
          </div>
          <div className="myLog_navbarB-content_right-menuContent">
            {toggleMenu 
              ? <Close onClick={() => setToggleMenu(false)}/>
              : <Menu onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu &&
              <div className="myLog_navbarB-content_right-menuContent_menuWrap">
                <div className="myLog_navbarB-content_right-menuContent_menuWrap-item">
                  <MenuItem />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarB