import React from 'react'
import {CircleUserRound} from "lucide-react"

const About = () => {
  return (
    <div id='about' className=' pt-15 pb-15 px-8 md:px-20 lg:px-40 bg-base-200 max-w-full'>

      <div className='hover:shadow-md bg- rounded-2xl p-4 flex flex-col items-center max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto'>
        <div className='mb-5 flex flex-col items-center'>
          <CircleUserRound strokeWidth={1} className='size-20  text-indigo-500 mb-4' />
          <span className='text-4xl text-indigo-500 font-medium '>About Me</span>
        </div>

        <div>
          <p className='leading-relaxed text-sm md:text-lg lg:text-lg text-slate-600 tracking-wider'>
          I’m Greg Worlanyo — a developer, animator, and artist based in Accra, Ghana.
          My journey into tech started during the COVID-19 pandemic, when I found myself 
          spending a lot of time on YouTube and TikTok. Somewhere along the way, 
          I came across Python—and what it could do immediately caught my attention.
          That curiosity led me to take my first programming course, and it set me on a path
          I’ve been building on ever since.
          Today, I work at the intersection of technology and art. I develop web platforms,
          create animations, and produce visual work that turns simple ideas into engaging experiences.
          From writing backend logic to painting and designing animated pieces, I focus on buildin
          things that are both functional and expressive.
          
          I have a background in teaching mathematics, science, biology, and physics, which shaped how I
          approach problem-solving. That mindset continues to influence
          both my development work and my creative process.

          I also explore my artistic side through painting and animation, constantly experimenting with
          new ways to bring ideas to life visually.

          Right now, I’m focused on growing as a software developer, refining my artistic style, and building
          projects that are both useful and visually compelling.

          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About