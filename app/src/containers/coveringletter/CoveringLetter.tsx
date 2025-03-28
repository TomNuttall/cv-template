import data from '../../assets/data/covering-letter.json'

import './CoveringLetter.css'

const CoveringLetter: React.FC = () => {
  return (
    <div className="covering-letter">
      {data.map((text, idx) => (
        <p key={`cl_${idx}`}>{text}</p>
      ))}
    </div>
  )
}

export default CoveringLetter
