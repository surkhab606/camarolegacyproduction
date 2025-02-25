import React from 'react';
import { useState } from 'react'
import './App.css'
import logo from './assets/camarologo.png';
import './data/CamaroData.js'
import CamaroData from "./data/CamaroData.js";

function HomePage() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <img src={logo} />
          <p>Random writing that shows me what the p tags do.</p>
          <div className="camaroboxparent">
            {CamaroData.map((camaro) => (
              <div className="camarobox">{camaro.year}</div>
          ))}

          </div>

      </div>
  )
}

export default HomePage
