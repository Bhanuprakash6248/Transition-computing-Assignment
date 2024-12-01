import React, { useState } from 'react'
import "./AskCatura.css"
import { assets } from '../../Assets/Assets'


const AskCatura = () => {
    const [preview,setPreview] = useState(true)
    const handlePreview = ()=>{
      setPreview((prev)=>!prev)
    }
    const textBlur = preview ? "blur-text":""
  return (
    <div className="chat-container">
    <div className="chat-header">
      <h3>Ask Catura</h3>
      <div className="chat-options">
        <button className="chat-option">WhatsApp <img src={assets.downArrow} alt="downArrow-img"  className='downArrow-img'/></button>
        <button className="chat-option">Greetings <img src={assets.downArrow} alt="downArrow-img"  className='downArrow-img'/></button>
      </div>
    </div>

    <div className="chat-body">
      <div className="chat-template">
        <p className={textBlur}>Lorem ipsum dolor sit amet consectetur. Eti tincidunt odio vivamus ac aliquam.</p>
        <div className="chat-template-footer">
          <button className="template-button" ><img src={assets.copy} alt="copy-icon" className='copy-icon'/><span>Copy to Send</span></button>
          <button className="template-button" onClick={handlePreview}><img src={assets.eye} alt="eye-icon" className='eye-icon'/><span>Preview</span></button>
        </div>
      </div>

    </div>

    <div className="chat-footer">
      <input type="text" className="chat-input" placeholder="Type a message..." />
      <button className="send-button">➤</button>
    </div>
  </div>
  )
}

export default AskCatura
