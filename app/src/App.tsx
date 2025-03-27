import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CoveringLetter from './containers/coveringletter'
import CV from './containers/cv'

import profile from './assets/data/profile.json'

import './App.css'

function App() {
  const { name } = profile
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CV name={name} />} />
        <Route
          path="/covering-letter"
          element={<CoveringLetter name={name} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
