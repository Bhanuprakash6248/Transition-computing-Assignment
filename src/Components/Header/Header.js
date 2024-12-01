import React from 'react'
import "./Header.css"
import { assets } from '../../Assets/Assets'
import { IoIosArrowForward } from "react-icons/io";


const Header = () => {
  return (
    <ul className='header-ul'>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-message-con'>
            <img src={assets.message} alt="message-icon" className='msg-icon' />
            <p className='header-name'>Cheyenne Bergson</p>
            <IoIosArrowForward className='arrow-icon'/>
        </li>







    </ul>
  )
}

export default Header
