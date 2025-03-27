import Markdown from 'react-markdown'
import { Calendar, Location } from '../../assets/icons'
import Icon from '../utility/icon'
import Link from '../utility/link'
import { formatYear } from '../../lib/formatYear'
import './Employement.css'

type EmployementProps = {
  company: string
  location: string
  projectType: string
  projectDetails: string[]
  role: string
  roleDetails: string[]
  yearFrom: number | string
  yearTo?: number | string
}

const Employement: React.FC<EmployementProps> = ({
  company,
  location,
  projectDetails,
  projectType,
  role,
  roleDetails,
  yearFrom,
  yearTo,
}) => {
  return (
    <div className="subsection employement">
      <div className="employement__summary">
        <h3>{`${role}, ${company}`}</h3>
        <div className="employement__about">
          <Icon icon={<Calendar title="dates" />}>
            <div className="employement__date">
              {formatYear(yearFrom, yearTo)}
            </div>
          </Icon>
          <Icon icon={<Location title="location" />}>{location}</Icon>
        </div>
      </div>
      {roleDetails.length > 0 && (
        <ul>
          {roleDetails.map((details, idx) => (
            <li key={`role_${idx}`} data-testid="employement-details">
              {details}
            </li>
          ))}
        </ul>
      )}

      {projectDetails.length > 0 && (
        <div className="employement__projects">
          <h4>{projectType}</h4>
          <ul>
            {projectDetails.map((details, idx) => (
              <li key={`project_${idx}`} data-testid="employement-projects">
                <Markdown
                  components={{
                    a: Link,
                    p: ({ children }) => <>{children}</>,
                  }}
                >
                  {details}
                </Markdown>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Employement
