import emailjs from "@emailjs/browser"
import React, { useEffect, useState, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate")

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      "gmail",
      "template_po4plqy",
      refForm.current,
      "7nRJkEJSx4IXCW33z".then(
        () => {
          alert("Message sent successfully!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message, please try again")
        }
      )
    )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]} idx={15} />
          </h1>
          <p>I am interested in freelance oppurtunities - especially ambitious or large projects. However, if you have other request or question, please don't hesitate to contact me using below form either.</p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" placeholder="Email" required />
                </li>

                <li>
                  <input type="text" placeholder="Subject" required />
                </li>
                <li>
                  <textarea type="text" placeholder="Message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
