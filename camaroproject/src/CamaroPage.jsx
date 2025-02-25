import React from 'react';
import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";

function CamaroPage() {
    const { year } = useParams();
    const intYear = Number(year);
    CamaroData.find((camaro) => camaro.year === intYear);
}

export default CamaroPage