import { ArrowDropDown, Person2, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "./navbarA.css"

const NavbarA = () => {
  return (
    <div className='myLog__navbarA'>
      <div className="myLog__navbarA-content">
        <div className="myLog__navbarA-content_left">
          <div className="myLog__navbarA-content_left-logoWrap">
            <h2 className="myLog__navbarA-content_left-logoWrap_logo">Delviz</h2>
            <ShoppingCartOutlined className='myLog__navbarA-content_left-logoWrap_logoIcon' />
          </div>
          <div className="myLog__navbarA-content_left-inputWrap">
            <Search className='myLog__navbarA-content_left-inputWrap_inputIcon' />
            <input type="text" placeholder ='Search for Products, Brands and Categories'/>
          </div>
          <button>search</button>
        </div>
        <div className="myLog__navbarA-content_right">
          <div className="myLog__navbarA-content_right-accountWrap">
            <Person2 className='myLog__navbarA-content_right-accountWrap_accountIcon' />
            <p className="myLog__navbarA-content_right-accountWrap_accountTitle">Your account</p>
            <ArrowDropDown className='myLog__navbarA-content_right-accountWrap_accountIconDrop' />
          </div>
          <div className="myLog__navbarA-content_right-helpWrap">
            <p className="myLog__navbarA-content_right-helpWrap_helpTitle">help?</p>
            <ArrowDropDown className='myLog__navbarA-content_right-helpWrap_helpDrop' />
          </div>
          <div className="myLog__navbarA-content_right-cartWrap">
            <ShoppingCartOutlined className='myLog__navbarA-content_right-cartWrap_cartIcon' />
            <p className="myLog__navbarA-content_right-cartWrap_cartTitle">cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarA