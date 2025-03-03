import React from 'react';
import { useState } from 'react'
import './App.css'
import logo from '../public/assets/camarologo.png';
import './data/CamaroData.js'
import CamaroData from "./data/CamaroData.js";
import {Link} from "react-router-dom";

function HomePage() {

  return (
      <div>
          <img src={logo} />

          <div className="camaroboxparent">

            {/* Dynamic div generation. */}
            {CamaroData.filter(camaro => camaro.year !== 1000).map((camaro) => (
              <Link to={`/camaro/${camaro.year}`}><div className="camarobox">{camaro.year}</div></Link>
          ))}

          </div>

      </div>
  )
}

export default HomePage
