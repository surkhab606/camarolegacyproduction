import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);
        const [objOpacity, setObjectOpacity] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                setObjectOpacity(true);
            }, 5);
        }, []);

        return (
                <div>
                    {/*Dynamic Camaro Image*/}
                    <div className ="camaro-background" style={{ backgroundImage: `url(/assets/${camaro.image})`}}></div>

                    {/*Page Info Overlay*/}
                    <div className ="camaro-overlay" style={{opacity: objOpacity ? 1: 0}}></div>

                    {/*Year Popup*/}
                    <p className="camaro-year" style={{opacity: objOpacity ? 1 : 0}}>{camaro.year}</p>



                </div>
        );

}

export default CamaroPage