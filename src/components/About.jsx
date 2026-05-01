import React from 'react'
import {CircleUserRound} from "lucide-react"

const About = () => {
  return (
    <div className=' pt-15 pb-15 px-8 md:px-20 lg:px-40 bg-base-200 max-w-full'>

      <div className='hover:shadow-md bg-base-300 rounded-2xl p-4 flex flex-col items-center max-w-4xl md:max-w-6xl lg:max-w-8xl mx-auto'>
        <div className='mb-5 flex flex-col items-center'>
          <CircleUserRound strokeWidth={1} className='size-20  text-base-content mb-4' />
          <span className='text-4xl font-medium '>About Me</span>
        </div>

        <div>
          <p className='leading-relaxed text-sm md:text-lg lg:text-lg text-base-content/80 tracking-wider'>
            I'm someone who enjoys creating, whether it's writing code or experimenting in other fields.
            I started off as an artist in the early phases. My passion for art only grew from there. Fast forward,
            COVID-19 hit and everyone had to stay home. Youtube and tiktok was my go to for connecting to the external 
            world since everyone was practicing social distancing. I came across <span className='fond-bold text-base-content/90'>Python </span>
            and at that very moment, i knew i wanted to become a programmer.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About