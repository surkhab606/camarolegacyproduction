import React from 'react';
import './App.css'
import logo from '../public/assets/camarologo.png';
import './data/CamaroData.js'
import CamaroData from "./data/CamaroData.js";
import {Link} from "react-router-dom";

//Helper function to retrieve Camaro generations
function camaroGen(year) {
    if (year >= 1967 && year <= 1969) {
        return "gen1"
    }

    if (year >= 1970 && year <= 1981) {
        return "gen2"
    }

    if (year >= 1982 && year <= 1992) {
        return "gen3"
    }

    if (year >= 1993 && year <= 2002) {
        return "gen4"
    }

    if (year >= 2010 && year <= 2015) {
        return "gen5"
    }

    if (year >= 2016 && year <= 2025) {
        return "gen6"
    }

}

function HomePage() {

  return (
      <div>
          <img src={logo} />

          <div className="camaroboxparent">

            {/* Dynamic div generation. */}
            {CamaroData.filter(camaro => camaro.year !== 1000).map((camaro) => (
              <Link to={`/camaro/${camaro.year}`}><div className="camarobox" style={{ backgroundImage: `url(${camaro.divImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                  <div className={`camaroboxtext-${camaroGen(camaro.year)}`}>{camaro.year}</div>
              </div></Link>
          ))}



          </div>

      </div>
  )
}

export default HomePage
