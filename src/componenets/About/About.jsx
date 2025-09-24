import React from 'react'
import "./about.css"
import Card from '../Cards/Card'
import reactimg from "../../assets/reactimg.png"
import gsapimg from "../../assets/gsap.jpg"
import sql from "../../assets/sql.png"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import mern from "../../assets/mern.png"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {
    gsap.from(".circle" , {
      x : -100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : ".circle",
        scrub : 2,
        start: "top 60%",
        end: "top 30%",
        
      }
    })
    gsap.from(".line" , {
      x : -100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : ".line",
        scrub : 2,
        start: "top 60%",
        end: "top 30%",
        
      }
    })
    gsap.from(".aboutdetails h1" , {
      x : -100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : ".aboutdetails h1",
        scrub : 2,
        start: "top 50%",
        end: "top 30%",
         
      }
    })
    gsap.from(".aboutdetails ul" , {
      y : 100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : ".aboutdetails li",
        scrub : 2,
        start: "top 60%",
        end: "top 30%",
         
      }
    })
    gsap.from(".rightabout" , {
      y : 100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : ".rightabout",
        scrub : 2,
        start: "top 60%",
        end: "top 30%",
          
      }
    })
  })

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle c1"></div>
          {/* <div className="line"></div> */}
          <div className="circle c2"></div>
          {/* <div className="line"></div> */}
          <div className="circle c3"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span> : DIMPLE MAHERAO</li>
              <li><span>AGE</span> : 22 YEARS</li>
              <li><span>GENDER</span> : FEMALE</li>
              <li><span>LANGUAGE KNOW</span> : HINDI,MARATHI,ENGLISH</li>
            </ul>
          </div>
          <div className="education">
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE</span> : BE </li>
              <li><span>BRANCH</span> : COMPUTER ENGINEERING</li>
              <li><span>CGPA</span> : 7.74 </li>
            </ul>
          </div>
          <div className="skills">
            <h1>SKILLS</h1>
            <ul>
              <li>FRONTEND Developer(React.js)</li>
              <li>GSAP</li>
              <li>MERN STACK</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="rightabout">
        <Card title='FRONTEND WEB DEVELOPER' image={reactimg} className="Card"/>
        <Card title='MERN STACK' image={mern} className="Card"/>
        <Card title='GSAP' image={gsapimg} className="Card"/>
      </div>
    </div>
  )
}

export default About
