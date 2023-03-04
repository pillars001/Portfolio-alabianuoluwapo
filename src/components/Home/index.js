import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "../Logo"
import Loader from "react-loaders"

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["n", "u", "o", "l", "u", "w", "a", "p", "o", ","]

  const jobArray = ["a", " ", "w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="first"> A</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
          </h1>
          <h2>Frontend Developer: Html, Css, JavaScript, React.</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
