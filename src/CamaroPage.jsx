import CamaroData from './data/CamaroData.js'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import leftarrow from  '../public/assets/leftarrow.svg'
import rightarrow from '../public/assets/rightarrow.svg'

function CamaroPage() {
        const { year } = useParams();
        const intYear = Number(year);
        const camaro = CamaroData.find((camaro) => camaro.year === intYear);
        const [objOpacity, setObjectOpacity] = useState(false);
        const currentIndex = CamaroData.findIndex((camaro => camaro.year === intYear));
        const prevIndex = currentIndex > 0 ? CamaroData[currentIndex - 1].year: null;
        const nextIndex = currentIndex < CamaroData.length - 1 ? CamaroData[currentIndex + 1].year: null;
        const [scrollPopUp, setScrollPopUp] = useState(false)



    //Fade in for div elements
    useEffect(() => {
            setTimeout(() => {
                setObjectOpacity(true);
            }, 5);
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


    const isMobile = windowDimensions.width < 768;

    //If we are on mobile, we need to use the div Image as the background image as the div image is already in the proper aspect ratio for mobile.
    const chosenImage = isMobile ? camaro.divImage : camaro.image

    //If we are on mobile, we want to show a scroll pop up reminder to remind users they have to scroll down
    useEffect(() => {
        if (!isMobile) return; //we only want this on mobile
        const timer = setTimeout(() => {
            setScrollPopUp(true);
        }, 2000);

        const handleUserInteraction = () => {
            setScrollPopUp(false);
            clearTimeout(timer); // cancel the popup if user interacts
            // remove listeners now that we got the interaction
            window.removeEventListener('scroll', handleUserInteraction);
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };

        window.addEventListener('scroll', handleUserInteraction);
        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('touchstart', handleUserInteraction);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleUserInteraction);
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };
    }, []);

    return (
                <div>

                    {/*Only display scroll pop up if it is on mobile!*/}
                    {scrollPopUp && isMobile && (
                        <div className="scroll-reminder">↓ Scroll Down</div>
                    )}


                    {/*Dynamic Camaro Image*/}
                    <div className ="camaro-background" style={{ backgroundImage: `url(${chosenImage})`}}></div>

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
                        {/*Credit Popup + Logic to detect whether a link should be generated or not*/}
                        <p className="camaro-credit" style = {{opacity: objOpacity ? 1 : 0}}>
                            Credit: {/^https?:\/\//.test(camaro.credit) ? (
                                <a href={camaro.credit} target="_blank" rel="noopener noreferrer">{camaro.credit}</a>
                            ) : (
                                camaro.credit
                            )}
                        </p>
                    </div>

                    {/*Year Popup*/}
                    <p className="camaro-year" style={{opacity: objOpacity ? 1 : 0}}>{camaro.year}</p>

                    {prevIndex != null &&
                        <Link to={`/camaro/${prevIndex}`}><svg className="leftarrow" style={{opacity: objOpacity ? 1 : 0}} xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewBox="0 -960 960 960">
                            <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        </svg></Link>
                    }

                    {nextIndex != null &&
                        <Link to={`/camaro/${nextIndex}`}><svg className="rightarrow" style={{opacity: objOpacity ? 1 : 0}} xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewBox="0 -960 960 960">
                            <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        </svg></Link>
                    }

                </div>
        );

}

export default CamaroPage