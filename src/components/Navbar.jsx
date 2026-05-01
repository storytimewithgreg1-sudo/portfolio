import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full '>
        <nav className=' flex justify-between items-center max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto p-5 '>
            <div className='flex items-center space-x-5'>
                <span className='font-medium text-base-content  text-sm md:text-md lg:text-lg text-center'>Greg's-Repo</span>
            
            </div>

            <div>
                
                    <a href='#about' className='btn btn-sm md:btn-md btn-accent text-base-200 rounded-xl'>
                    About me
                    </a>
            

            </div>
       
        
        </nav>
    </div>
  )
}

export default Navbar