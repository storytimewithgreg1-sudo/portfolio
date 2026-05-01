import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full '>
        <nav className='flex justify-around items-center max-w-10xl md:max-w-13xl lg:max-w-15xl mx-auto p-5 '>
        <div className='flex items-center space-x-5'>
            <span className='font-medium text-base-content  text-sm md:text-md lg:text-lg text-center'>Greg's-Repo</span>
           
        </div>

        <div>
            <button className='btn btn-sm md:btn-md btn-accent text-base-200 rounded-xl'>
                About me
            </button>

        </div>
       
        
    </nav>
    </div>
  )
}

export default Navbar