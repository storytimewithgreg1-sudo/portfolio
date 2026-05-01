import React from 'react'

const skillGroups = [
 {
    category: "Frontend",
    skills: [{skillDetails:{name : "React",
                               level : 80 }},
            {skillDetails:{name : "TailwindCSS",
                               level : 85}},
            {skillDetails:{name : "Motion",
                               level : 20
    }}]
  },
  {
    category: "Backend",
    skills: [{skillDetails:{name : "Springboot",
                               level : 29 }},
            {skillDetails:{name : "Nodejs",
                               level : 75}},
            {skillDetails:{name : "Django",
                               level : 2
    }}]
  },
 {
    category: "Tools",
    skills: [{skillDetails:{name : "Git",
                               level : 50 }},
            {skillDetails:{name : "Github",
                               level : 70}},
            {skillDetails:{name : "VsCode",
                               level : 80
    }}]
  },
  {
    category: "Others",
    skills: [{skillDetails:{name : "Photoshop",
                               level : 94 }},
            {skillDetails:{name : "After Effects",
                               level : 90}},
            {skillDetails:{name : "Adobe Animate",
                               level : 85
    }}]
  }
]

export const Skills = () => {
  return (
    <div className='w-full min-h-screen p-5  bg-gradient-to-br from-slate-50 to-indigo-50'>
        <div className='max-w-4xl md:max-w-5xl lg:max-w-7xl flex flex-col items-center mx-auto '>
            <span className='font-medium text-indigo-700 text-4xl mb-10'>Skills</span>
            
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20  lg:grid-cols-3'>
                {skillGroups.map((group) => (
                    <div className='card border border-indigo-100  flex flex-col items-center bg-white p-6 rounded-xl shadow-lg mb-20'>
                        <span className='text-indigo-600 font-semibold text-xl card-title mb-5  '>{group.category}</span>
                        {group.skills.map((item)=> (
                            <div className='flex flex-col mb-9'>
                                <h1 className='mb-3 text-slate-700'> {item.skillDetails.name} </h1>
                           
                                <progress className='progress w-50 md:w-70 lg:w-70 progress-primary' value={item.skillDetails.level} max="100"></progress>
                            </div>

                        ))}

                    </div>
                ))}
            </div>
            
  
        </div>

    </div>
  )
}
