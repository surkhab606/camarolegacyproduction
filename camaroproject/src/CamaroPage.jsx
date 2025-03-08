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
                    <div className ="camaro-background" style={{ backgroundImage: `url(${camaro.image})`}}></div>

                    {/*Page Info Overlay*/}
                    <div className ="camaro-overlay" style={{opacity: objOpacity ? 1: 0}}>
                        {/*Description Popup*/}
                        <p className="camaro-desc" style={{opacity: objOpacity ? 1 : 0}}>{camaro.description}</p>
                        {/*Trims Popup*/}
                        <p className="camaro-trims" style={{opacity: objOpacity ? 1 : 0}}>Trims: {camaro.trims}</p>
                        {/*Horsepower Popup*/}
                        <p className="camaro-hp" style={{opacity: objOpacity ? 1 : 0}}>Horsepower - {camaro.horsepower}</p>
                        {/*0-60 Popup*/}
                        <p className="camaro-zero" style={{opacity: objOpacity ? 1 : 0}}>0-60 -  {camaro.zeroToSixty}</p>
                        {/*MSRP Popup*/}
                        <p className="camaro-msrp" style={{opacity: objOpacity ? 1 : 0}}>MSRP -  {camaro.MSRP}</p>
                        {/*Forum Popup*/}
                        <p className="camaro-forum" style={{opacity: objOpacity ? 1 : 0}}>More Info -  <a href={camaro.forumLink} target="_blank" rel="noopener noreferrer">{camaro.forumLink}</a></p>
                    </div>

                    {/*Year Popup*/}
                    <p className="camaro-year" style={{opacity: objOpacity ? 1 : 0}}>{camaro.year}</p>





                </div>
        );

}

export default CamaroPage