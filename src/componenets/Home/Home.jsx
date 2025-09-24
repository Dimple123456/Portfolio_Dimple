import React from 'react'
import "./Home.css"
import women from "../../assets/blueNew.webp"
import { Typewriter } from 'react-simple-typewriter'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'


const Home = () => {

  

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1" , {
      y : 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line2" , {
      y : 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line3" , {
      y : 80,
      duration: 1,
      opacity: 0
    })
    gsap.from(".righthome img",{
      x: 200,
      duration : 1,
      opacity : 0
    })
    
  })

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">DIMPLE MAHERAO</div>
          <div className="line3">
          <Typewriter
            words={['WEB DEVELOPER', 'FRONTEND DEVELOPER']}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={true}
            
            
          />
          
          </div>
          
          <button onClick={()=> {
            window.open("https://drive.google.com/file/d/1kriMYxI1wbvI21S3zNZCnIh2HRSU2MS2/view?usp=drive_link", "_blank");

          }}>RESUME</button>
        </div>

      </div>
      <div className="righthome">
          <img src={women} alt="" />
      </div>
    </div>
  )
}

export default Home
