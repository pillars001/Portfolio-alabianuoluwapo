import React, { useRef } from "react"
import "./index.scss"
import LogoS from "../../Assets/images/Anu-logo.png"
import { useEffect } from "react"
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin"
import gsap from "gsap-trial"

function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 20,
      })
  }, [])

  const pathanimation = ({ index }) => {
    console.log(index)
  }

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="A" />

      <svg width="233" height="240" viewBox="0 0 233 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="svg-container" fill="none">
          <path draws={pathanimation} d="M137 2L1 239L59 183.937M137 2L80 164M137 2L195.122 147M80 164L137 105M80 164L59 183.937M137 105L232 239L195.122 147M137 105L195.122 147M59 183.937L75 207H189L179 219H59V183.937Z" stroke="white" />
        </g>
      </svg>
    </div>
  )
}

export default Logo
