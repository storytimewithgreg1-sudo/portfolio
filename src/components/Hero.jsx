import React from 'react'
import TextType from './TextType'

const Hero = () => {
  return (
    <div className='w-full h-100 flex flex-col items-center justify-center  pt-15 '>

      {/* <div className='max-w-10xl md:max-w-13xl lg:max-w-15xl   '>
        <img className='bg-accent/20 rounded-full  w-30 md:w-50  h-auto mb-5 ' src="/greg.png" alt="" />
      </div> */}
      <div className=' flex flex-col justify-center items-center'>
      
       
        <TextType 
          className='font-bold text-4xl md:text-6xl text-base-content mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
          text={["Hello, I'm Greg", "Welcome", "To My Repo"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />

        <span className='font-medium text-xs md:text-sm text-indigo-600/60'>Developer • Animator • Game Dev</span>
        <a href="#projects" className='btn bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md my-10'>View Projects</a>
        
       
      </div>
    </div>
  )
}
 
export default Hero