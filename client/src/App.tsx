

import { useEffect, useState } from 'react'
import './App.css'
import { RandomColors } from 'random-color-type-generator'

function App() {
  const [currentColor, setCurrentColor] = useState('#242424')
  const { getRandomRGBColor, getRandomHSLColor, getRandomHexColor, } = new RandomColors()
  useEffect(() => {
    document.body.style.backgroundColor = currentColor
  }, [currentColor])

  const handleClick = (value: string) => {
    
    switch (value) {
      case 'rgb':
        setCurrentColor(getRandomRGBColor())
        break;
      case 'hsl':
        setCurrentColor(getRandomHSLColor())
        break
      case 'hex':
        setCurrentColor(getRandomHexColor())
        break
      default:
        break;
    }
  }

  return (
    <>
      <div>
        <h2>{currentColor}</h2>
      </div>
      <h1>Random Color Generator</h1>
      <div className="card">
        <button onClick={() => handleClick('rgb')}>
          RGB
        </button>
        <button onClick={() => handleClick('hex')}>
          Hex
        </button>

        <button onClick={() => handleClick('hsl')}>
          HSL
        </button>
      </div>
      <p className="read-the-docs">
        Click on the buttons above to Generator Random Color
      </p>
    </>
  )
}

export default App
