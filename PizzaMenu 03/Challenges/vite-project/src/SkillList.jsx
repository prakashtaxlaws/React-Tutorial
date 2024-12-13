import React from 'react'
import Allskills from './Allskills'

const skills = [
  {
    skill: 'HTML',
    level: "advanced"
  },
  {
    skill: 'CSS',
    level: "advanced"
  },
  {
    skill: 'JS',
    level: "advanced"
  },
  {
    skill: 'React',
    level: "advanced"
  },
  {
    skill: 'Node',
    level: "beginner"
  },
  {
    skill: 'Python',
    level: "beginner"
  },
  {
    skill: 'PHP',
    level: "intermediate"
  }
]

export default function SkillList() {
  return (
    <>
    <div>
      {skills.map((tech)=>(
        <Allskills key={tech.skill} skills={tech.skill} level={tech.level}/>
      ))}


    </div>
    
    </>
  )
}
