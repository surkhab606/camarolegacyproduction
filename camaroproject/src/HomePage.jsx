import React from 'react';
import { useState } from 'react'
import './App.css'
import logo from './assets/camarologo.png';
import './data/CamaroData.js'
import CamaroData from "./data/CamaroData.js";
import {Link} from "react-router-dom";

function HomePage() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <img src={logo} />
          <p>Random writing that shows me what the p tags do.</p>

          <div className="camaroboxparent">

            {/* Dynamic div generation. */}
            {CamaroData.map((camaro) => (
              <Link to={`/camaro/${camaro.year}`}><div className="camarobox">{camaro.year}</div></Link>
          ))}

          </div>

      </div>
  )
}

export default HomePage
