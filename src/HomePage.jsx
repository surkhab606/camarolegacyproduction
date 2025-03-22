import React, {useEffect, useState} from 'react';
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
    {/*The dropdown should start at generation 1.*/}
    const [dropGen, setDropGen] = useState(camaroGen(1967))

    /*Goes back to saved scroll position if it exists*/
    useEffect(() => {
        const scrollPos = Number(sessionStorage.getItem("scrollPosition"));
        if (scrollPos > 0) {
            /*scrollTo needs TWO arguments (horizontal and vertical scroll)*/
            window.scrollTo(0, scrollPos);
        }

    }, []);

    //Function for dropdown / mobile logic
    function getWindow() {
        const{innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindow());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindow());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //This variable checks if our screen size is mobile or not.
    const isMobile = windowDimensions.width < 768;

    //This variable is complex so bear with me.
    //We first check if we are on mobile. If we are then we need to generate the divs based on what dropdown year
    //is selected. However, if we are not on mobile, then camaroFilteredData just equals CamaroData, changing nothing.
    const camaroFilteredData = isMobile ? CamaroData.filter(camaro => camaroGen(camaro.year) === dropGen)
        : CamaroData;



  return (
      <div className={"homepage"}>
          <div className={"content"}>
              <div className={"logoDiv"}>
                  <img src={logo} alt={"Camaro Legacy Logo"} className={"logo"}/>
                  <div className={"dropdown-container"}>
                      <select className={"dropdown"} onChange={(event) => (setDropGen(event.target.value))}>
                          <option value={"gen1"}>First Generation (1967 - 1969)</option>
                          <option value={"gen2"}>Second Generation (1970 - 1981)</option>
                          <option value={"gen3"}>Third Generation (1982 - 1992)</option>
                          <option value={"gen4"}>Fourth Generation (1993 - 2002)</option>
                          <option value={"gen5"}>Fifth Generation (2010 - 2015)</option>
                          <option value={"gen6"}>Sixth Generation (2016 - 2024)</option>
                      </select>
                  </div>
              </div>
          <a href={"https://www.surkhabmundi.com"}><img src={smlogo} alt={"Portfolio Link"} style ={{width: "50px", position: "absolute", top: "10px", left: "25px"}}/></a>

          <div className="camaroboxparent">

            {/* Dynamic div generation. */}
            {camaroFilteredData.filter(camaro => camaro.year !== 1000).map((camaro) => (
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
