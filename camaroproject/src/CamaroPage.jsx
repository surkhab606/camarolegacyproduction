import React, {useEffect, useState} from 'react';
import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);
        const [scrollPercent, setScrollPercent] = useState(0);

    {/*Determine scroll percentage on page*/}
    useEffect(() => {
        const handleScroll = () => {
            const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            setScrollPercent(percent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
        console.log(scrollPercent);

    return (
                <div>
                    {/*Dynamic Camaro Image*/}
                    <div className ="camaro-background" style={{ backgroundImage: `url(/assets/${camaro.image})`}}></div>

                    {/*Camaro Info Div*/}
                    <div className ="camaro-overlay" style={{ width: `${scrollPercent}%`, transition: "width 0.2s ease-out"}}></div>
                </div>
        );

}

export default CamaroPage