import Education from '../../components/education'
import Employment from '../../components/employment'
import Profile from '../../components/profile'
import Skills from '../../components/skills'

import courses from '../../assets/data/education.json'
import jobs from '../../assets/data/employement.json'
import profile from '../../assets/data/profile.json'
import skills from '../../assets/data/skills.json'

import './CV.css'

const CV: React.FC = () => {
  return (
    <div className="cv">
      <h1>{profile.name}</h1>
      <Profile {...profile} />
      <h2>Employment</h2>
      {jobs.map((job, idx) => (
        <Employment key={idx} {...job} />
      ))}
      <h2>Education</h2>
      {courses.map((course, idx) => (
        <Education key={idx} {...course} />
      ))}
      <h2>Skills</h2>
      <Skills {...skills} />
    </div>
  )
}

export default CV
