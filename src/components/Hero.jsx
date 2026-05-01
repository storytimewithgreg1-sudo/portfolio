import React from 'react'
import TextType from './TextType'

const Hero = () => {
  return (
    <div className='w-full h-100 flex flex-col items-center  pt-15 '>

      <div className='max-w-10xl md:max-w-13xl lg:max-w-15xl   '>
        <img className='bg-accent/20 rounded-full  w-30 md:w-50  h-auto mb-5 ' src="/greg.png" alt="" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className='font-bold font-poppins text-base-content  text-2xl md:text-4xl mb-3'>Hello, I'm Greg </span>
       

        <TextType 
          className='text-lg md:text-xl text-base-content/70'
          text={["An artist", "Web developer", "And aspiring game developer"]}
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
       
      </div>
    </div>
  )
}
 
export default Hero