import React from 'react';
import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);
        console.log("Image Path:", `/assets/${camaro.image}`);


    return (
                <div>
                    <div className ="camaro-background" style={{ backgroundImage: `url(/assets/${camaro.image})`}}></div>
                </div>
        );

}

export default CamaroPage