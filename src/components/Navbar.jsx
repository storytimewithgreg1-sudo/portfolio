import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full '>
        <nav className=' flex justify-between items-center max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto p-5 '>
            <div className='flex items-center space-x-5'>
                <span className=' font-bold text-base-content  text-xl md:text-md lg:text-lg text-center'>Greg<span className='text-indigo-500'>Repo</span></span>
            
            </div>

            <div>
                
                    <a href='#about' className='btn btn-sm md:btn-md bg-linear-to-r from-blue-600 to-indigo-500 text-base-200 rounded-xl'>
                    About me
                    </a>
            

            </div>
       
        
        </nav>
    </div>
  )
}

export default Navbar