import React, { useState } from 'react'
import "./Header.css"
import { assets } from '../../Assets/Assets'
import { IoIosArrowForward } from "react-icons/io";


const Header = () => {
    const [clicked,setClicked] = useState(false)
    const listclicked = clicked ? "headerActive":""

    const handleHeader = ()=>{
        setClicked((prev)=>!prev)
    }
  return (
    <ul className='header-ul'>
        <li className={`header-listItem ${listclicked}`} onClick={handleHeader}>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Cheyenne Bergson</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Jonathan Higgins</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Capt. Trunk</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Hannibal Smi..</p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Capt. Trunk </p>
        </li>
        <li className='header-listItem'>
            <div className='header-pic'><span>CB</span></div>
            <p className='header-name'>Hannibal Smi..</p>
            <span className='header-notification'>2</span>
        </li>
        <li className='header-message-con'>
            <img src={assets.message} alt="message-icon" className='msg-icon' />
            <p className='header-name'>Messaging</p>
            <IoIosArrowForward className='arrow-icon'/>
        </li>







    </ul>
  )
}

export default Header
