import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full '>
        <nav className='flex justify-around items-center max-w-10xl md:max-w-13xl lg:max-w-15xl mx-auto p-5 '>
        <div className='flex items-center space-x-5'>
            <span className='font-medium text-base-content  text-lg md:text-xl lg:text-2xl text-center'>Greg's-Repo</span>
            <label className="flex cursor-pointer gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input type="checkbox" value="dark" className="toggle theme-controller" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
</label>
        </div>

        <div>
            <button className='btn btn-accent text-base-200 rounded-xl'>
                About me
            </button>

        </div>
       
        
    </nav>
    </div>
  )
}

export default Navbar