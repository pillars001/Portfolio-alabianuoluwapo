import React, { useRef } from "react"
import "./index.scss"
import LogoS from "../../Assets/images/Anu-logo.png"

function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="A" />
      <svg width="208" height="180" viewBox="0 0 208 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M179.5 21L243.153 125.25H115.847L179.5 21Z" />
      </svg>
    </div>
  )
}

export default Logo
