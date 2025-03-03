import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);
        const [yearOpacity, setYearOpacity] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                setYearOpacity(true);
            }, 1000);
        }, []);

        return (
                <div>
                    {/*Dynamic Camaro Image*/}
                    <div className ="camaro-background" style={{ backgroundImage: `url(/assets/${camaro.image})`}}></div>

                    {/*Page Info Overlay*/}
                    <div className ="camaro-overlay"></div>

                    {/*Year Popup*/}
                    <p className="camaro-year">{camaro.year}</p>



                </div>
        );

}

export default CamaroPage