import React, {useEffect, useState} from 'react';
import './App.css'
import logo from '../public/assets/camarolegacylogo.png';
import smlogo from '../public/assets/smlogo.png';
import './data/CamaroData.js'
import CamaroData from "./data/CamaroData.js";
import {Link} from "react-router-dom";
import Footer from './Footer.jsx'

function camaroGen(year) {
    if (year >= 1967 && year <= 1969) return "gen1"
    if (year >= 1970 && year <= 1981) return "gen2"
    if (year >= 1982 && year <= 1992) return "gen3"
    if (year >= 1993 && year <= 2002) return "gen4"
    if (year >= 2010 && year <= 2015) return "gen5"
    if (year >= 2016 && year <= 2025) return "gen6"
}

function HomePage() {
    const [dropGen, setDropGen] = useState(camaroGen(1967));
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const scrollPos = Number(sessionStorage.getItem("scrollPosition"));
        if (scrollPos > 0) window.scrollTo(0, scrollPos);
    }, []);

    function getWindow() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindow());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindow());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowDimensions.width < 768;

    const camaroFilteredData = isMobile
        ? CamaroData.filter(camaro => camaroGen(camaro.year) === dropGen)
        : CamaroData;

    const handleImageLoad = (year) => {
        setLoadedImages(prev => ({ ...prev, [year]: true }));
    };

    return (
        <div className="homepage">
            <a href="https://www.surkhabmundi.com">
                <img src={smlogo} alt="Portfolio Link" className="personalLogo" />
            </a>
            <div className="content">
                <div className="logoDiv">
                    <img src={logo} alt="Camaro Legacy Logo" className="logo" />
                    <div className="dropdown-container">
                        <select className="dropdown" onChange={(event) => setDropGen(event.target.value)}>
                            <option value="gen1">First Generation (1967 - 1969)</option>
                            <option value="gen2">Second Generation (1970 - 1981)</option>
                            <option value="gen3">Third Generation (1982 - 1992)</option>
                            <option value="gen4">Fourth Generation (1993 - 2002)</option>
                            <option value="gen5">Fifth Generation (2010 - 2015)</option>
                            <option value="gen6">Sixth Generation (2016 - 2025)</option>
                        </select>
                    </div>
                </div>



                <div className="camaroboxparent">
                    {camaroFilteredData.filter(camaro => camaro.year !== 1000).map((camaro) => (
                        <Link
                            key={camaro.year}
                            onClick={() => sessionStorage.setItem("scrollPosition", window.scrollY)}
                            to={`/camaro/${camaro.year}`}
                        >
                            <div className="camarobox" style={{ position: 'relative' }}>
                                {!loadedImages[camaro.year] && <div className="shimmer-loader" />}
                                <img
                                    src={camaro.divImage}
                                    alt="Camaro Thumbnail"
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: loadedImages[camaro.year] ? 1 : 0,
                                        transition: 'opacity 0.5s ease-in-out',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1
                                    }}
                                    onLoad={() => handleImageLoad(camaro.year)}
                                />
                                <div className="hover-light" style={{ zIndex: 2 }}></div>
                                <div className="glossy" style={{ zIndex: 2 }}></div>
                                <div className={`camaroboxtext-${camaroGen(camaro.year)}`} style={{ zIndex: 2 }}>
                                    {camaro.year}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;
