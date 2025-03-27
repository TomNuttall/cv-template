import data from '../../assets/data/covering-letter.json'

import './CoveringLetter.css'

type CoveringLetterProps = {
  name: string
}

const CoveringLetter: React.FC<CoveringLetterProps> = ({ name }) => {
  document.title = `${name} - Covering Letter`
  return (
    <div className="covering-letter">
      {data.map((text, idx) => (
        <p key={`cl_${idx}`}>{text}</p>
      ))}
    </div>
  )
}

export default CoveringLetter
