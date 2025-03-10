import React, {useEffect} from 'react';
import './App.css'
import logo from '../public/assets/camarolegacylogo.png';
import smlogo from '../public/assets/smlogo.png';
import './data/CamaroData.js'
import CamaroData from "./data/CamaroData.js";
import {Link} from "react-router-dom";
import Footer from './Footer.jsx'


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

    /*Goes back to saved scroll position if it exists*/
    useEffect(() => {
        const scrollPos = Number(sessionStorage.getItem("scrollPosition"));
        if (scrollPos > 0) {
            /*scrollTo needs TWO arguments (horizontal and vertical scroll)*/
            window.scrollTo(0, scrollPos);
        }

    }, []);


  return (
      <div className={"homepage"}>
          <div className={"content"}>
          <img src={logo} alt={"Camaro Legacy Logo"}  style={{ width: "450px", height: "auto", display: "block", margin: "0 auto"}}/>
          <a href={"https://www.surkhabmundi.com"}><img src={smlogo} alt={"Portfolio Link"} style ={{width: "50px", position: "absolute", top: "10px", left: "25px"}}/></a>

          <div className="camaroboxparent">

            {/* Dynamic div generation. */}
            {CamaroData.filter(camaro => camaro.year !== 1000).map((camaro) => (
              <Link onClick={() => sessionStorage.setItem("scrollPosition", window.scrollY)}
                    to={`/camaro/${camaro.year}`}><div className="camarobox" style={{ backgroundImage: `url(${camaro.divImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                  {/*Div Hover Light Effect*/}
                  <div className ="hover-light"></div>
                  {/*Gloss Effect*/}
                  <div className ="glossy"></div>
                  <div className={`camaroboxtext-${camaroGen(camaro.year)}`}>{camaro.year}</div>
              </div></Link>
          ))}
          </div>

          </div>

          <Footer />

      </div>



  );
}

export default HomePage
