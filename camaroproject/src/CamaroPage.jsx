import React from 'react';
import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);
        return (
            <div>
                {camaro ? <div className="camaroimage">{camaro.image}</div> : <p>Camaro Not Found</p>}
            </div>
        )
}

export default CamaroPage