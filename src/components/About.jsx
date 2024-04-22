import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt=''/>
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate ratione eum delectus sit, suscipit iure, perferendis
        distinctio illo deserunt tenetur expedita aperiam modi placeat ipsa 
        in minima excepturi, quos voluptatum!</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
