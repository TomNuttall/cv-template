import Education from '../../components/education'
import Employement from '../../components/employement'
import Profile from '../../components/profile'
import Skills from '../../components/skills'

import courses from '../../assets/data/education.json'
import jobs from '../../assets/data/employement.json'
import profile from '../../assets/data/profile.json'
import skills from '../../assets/data/skills.json'

import './CV.css'

type CVProps = {
  name: string
}

const CV: React.FC<CVProps> = ({ name }) => {
  document.title = `${name} - CV`
  return (
    <div className="cv">
      <h1>{profile.name}</h1>
      <Profile {...profile} />
      <h2>Employment</h2>
      {jobs.map((job, idx) => (
        <Employement key={idx} {...job} />
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
