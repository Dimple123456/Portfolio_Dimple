import React from 'react'
import Card from '../Cards/Card'
import "./Projects.css"
import ct from "../../assets/chatbot.png"
import vi from "../../assets/video.png"
import fd from "../../assets/food.png"
import sp from "../../assets/shopify.png"
import air from "../../assets/airbub.png"
import hi from "../../assets/healthy.png"
import mu from "../../assets/music.png"
import co from "../../assets/coffee.png"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const p1 = "https://vermillion-flan-c24a74.netlify.app/"
const p2 = "https://video-calling-new-snowy.vercel.app/"
const p4 = "https://taupe-mandazi-70bcf5.netlify.app/"
const p3 = "https://e-commerce-bydsr.netlify.app/"
const p5 = "https://rainbow-biscochitos-047c9d.netlify.app/"



const Projects = () => {

  useGSAP(() => {

    gsap.from(".slider" , {
      y : 100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : ".slider",
        scroll : "body",
        scrub : 2,
        start: "top 80%",
        end: "top 30%"
      }
    })
    gsap.from("#para" , {
      y : 100,
      duration : 1,
      opacity:0,
      stagger: 1,
      scrollTrigger:{
        trigger : "#para",
        scroll : "body",
        scrub : 2,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })

  return (
    <div id="projects">
      <h1 id="para">PROJECTS <span style={{fontSize:"15px"}}>(click on them)</span></h1>
      <div className="slider">
        <Card title="AI CHATBOT" image={ct} link={p1}/>
        <Card title="VIDEOCALLING WEB" image={vi} link={p2}/>
        <Card title="E-commerce Website" image={sp} link={p3}/>
        <Card title="FOOD ORDERING" image={fd} link={p4}/>
        <Card title="AIRBNB" image={air} link={p5}/>
        
      </div>
    </div>
  )
}

export default Projects
