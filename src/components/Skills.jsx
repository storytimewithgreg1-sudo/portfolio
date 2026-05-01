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
    <div className='w-full min-h-screen p-5'>
        <div className='max-w-4xl md:max-w-5xl lg:max-w-7xl flex flex-col items-center mx-auto '>
            <span className='font-medium text-4xl mb-10'>Skills</span>
            
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20  lg:grid-cols-3'>
                {skillGroups.map((group) => (
                    <div className='card  flex flex-col items-center bg-base-300 p-6 shadow-lg mb-20'>
                        <span className='text-base-content/80 card-title mb-5 font-medium text-2xl '>{group.category}</span>
                        {group.skills.map((item)=> (
                            <div className='flex flex-col mb-9'>
                                <h1 className='mb-3 text-base-content/60'> {item.skillDetails.name} </h1>
                           
                                <progress className='progress w-50 md:w-70 lg:w-70 progress-accent' value={item.skillDetails.level} max="100"></progress>
                            </div>

                        ))}

                    </div>
                ))}
            </div>
            
  
        </div>

    </div>
  )
}
