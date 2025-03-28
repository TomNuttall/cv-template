import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import CoveringLetter from './containers/coveringletter'
import CV from './containers/cv'
import Header from './components/header'

import profile from './assets/data/profile.json'

import './App.css'

const LINKS = [
  { name: 'CV', src: '/cv' },
  { name: 'Covering Letter', src: `/covering-letter` },
]

function App() {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({ contentRef })

  const { name } = profile

  return (
    <div className="app">
      <BrowserRouter>
        <Header links={LINKS} name={name}>
          <button className="app__print" onClick={() => reactToPrintFn()}>
            Save PDF
          </button>
        </Header>
        <div className="app__content" ref={contentRef}>
          <style>{`@page { margin: 4rem; }`}</style>
          <Routes>
            <Route path="/" element={<Navigate to="/cv" replace={true} />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/covering-letter" element={<CoveringLetter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
