import React from 'react'
import { Notebook, Ellipsis } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "G-note",
      about: "A simple notes app where you can write down ideas, recipes... , i may add more functionality in the future",
      icon: <Notebook className='size-15 text-indigo-500' />,
      link :"https://g-note.onrender.com/"

    },
    {
      title: "Loading...",
      about: "Still working on it",
      icon : <Ellipsis className='size-15 text-indigo-500' />,
      link: ""

    },
  ]
  
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-20 md:px-10 pb-15 '>
        <span className='flex flex-col items-center font-medium text-3xl text-indigo-700 mb-10 pt-10'>Projects</span>
        <div className='md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2'>

      {
        projects.map((project) => (
          <div className='card shadow-lg bg-white m-5 '>
            <a href={project.link}>
              <div className='card-body flex flex-col justify-center items-center'>
                {project.icon}
                <h3 className='font-medium text-lg text-slate-800'>{project.title}</h3>
                <p className='text-slate-600'>{project.about}</p>

              </div></a>

          </div>
        ))
      }

    </div>
      </div>
    </div>
  )
}

export default Projects