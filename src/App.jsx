import { useState } from 'react'
import db from './db.json'
import { randomGen } from '../utils/nRandom'
import './App.css'
import CardBox from './components/CardBox'

const listVg = ["vg1", "vg2", "vg3", "vg4"]

function App() {
  const [index, setIndex] = useState(randomGen(db))
  const [background, setBackground] = useState(randomGen(listVg))

  const handleIndex = () => {
    setIndex(randomGen(db));
    setBackground(randomGen(listVg))
  }
  return (
    <main className={`main ${background}`}>
      <CardBox handleIndex={handleIndex} index={index} />
    </main>
  )
}

export default App
