import CamaroData from './data/CamaroData.js'
import {useParams} from "react-router-dom";

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);

        return (
                <div>
                    {/*Dynamic Camaro Image*/}
                    <div className ="camaro-background" style={{ backgroundImage: `url(/assets/${camaro.image})`}}></div>

                    {/*Page Info Overlay*/}
                    <div className ="camaro-overlay"></div>

                    {/*Year Popup*/}
                    <div className ="camaro-year"></div>

                </div>
        );

}

export default CamaroPage