import CamaroData from './data/CamaroData.js';
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import leftarrow from '../public/assets/leftarrow.svg';
import rightarrow from '../public/assets/rightarrow.svg';
import home from '../public/assets/homeicon.svg'

function CamaroPage() {
    const { year } = useParams();
    const intYear = Number(year);
    const camaro = CamaroData.find(camaro => camaro.year === intYear);

    const [objOpacity, setObjectOpacity] = useState(false);
    const [scrollPopUp, setScrollPopUp] = useState(false);
    const [factsVisible, setFactsVisible] = useState(false);
    const [descVisible, setDescVisible] = useState(false);


    const currentIndex = CamaroData.findIndex(camaro => camaro.year === intYear);
    const prevIndex = currentIndex > 0 ? CamaroData[currentIndex - 1].year : null;
    const nextIndex = currentIndex < CamaroData.length - 1 ? CamaroData[currentIndex + 1].year : null;

    const [bgLoaded, setBgLoaded] = useState(false);

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
    const chosenImage = isMobile ? camaro.divImage : camaro.image;

    // Fade in overlay
    useEffect(() => {
        setTimeout(() => {
            setObjectOpacity(true);
        }, 5);
    }, []);

    // Scroll reminder on mobile
    useEffect(() => {
        if (!isMobile) return;

        const timer = setTimeout(() => {
            setScrollPopUp(true);
        }, 2000);

        const handleUserInteraction = () => {
            setScrollPopUp(false);
            clearTimeout(timer);
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
    }, [isMobile]);




    // Show facts/desc after short delay on mobile (no scroll dependency)
    useEffect(() => {
        if (!isMobile) {
            setFactsVisible(true);
            setDescVisible(true);
        } else {
            const timer = setTimeout(() => {
                setFactsVisible(true);
                setDescVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isMobile]);


    return (

        <div>
            {/* Mobile-only scroll reminder */}
            {/* this doesn't currently work, might rework in the future*/}
            {scrollPopUp && isMobile && (
                <div className="scroll-reminder">↓ Scroll Down</div>
            )}

            <div className="camaro-mobile-wrapper">
                <img
                    src={chosenImage}
                    alt="Preload Background"
                    style={{ display: 'none' }}
                    onLoad={() => setBgLoaded(true)}
                />
                {!bgLoaded && <div className="shimmer-loader" />}
                <div
                        className="camaro-background"
                        style={{
                            opacity: bgLoaded ? 1 : 0,
                            backgroundImage:`url(${chosenImage})`,
                        }}>
                    </div>
                <p className="camaro-year" style={{ opacity: objOpacity ? 1 : 0 }}>{camaro.year}</p>

                <div className="camaro-overlay" style={{ opacity: objOpacity ? 1 : 0 }}>
                    {isMobile ? (
                        <div className="right-overlay">
                            <p className="camaro-desc" style={{ opacity: objOpacity && descVisible ? 1 : 0 }}>
                                {camaro.description}
                            </p>
                            <p className="camaro-trims" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                Trims: {camaro.trims}
                            </p>
                            <p className="camaro-hp" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                Horsepower - {camaro.horsepower}
                            </p>
                            <p className="camaro-zero" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                0-60 - {camaro.zeroToSixty}
                            </p>
                            <p className="camaro-msrp" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                MSRP - {camaro.MSRP}
                            </p>
                            <p className="camaro-forum" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                More Info - <a href={camaro.forumLink} target="_blank" rel="noopener noreferrer">{camaro.forumLink}</a>
                            </p>
                            <p className="camaro-credit" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                Credit: {/^https?:\/\//.test(camaro.credit) ? (
                                <a href={camaro.credit} target="_blank" rel="noopener noreferrer">{camaro.credit}</a>
                            ) : (
                                camaro.credit
                            )}
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="left-overlay">
                                <p className="camaro-desc" style={{ opacity: objOpacity && descVisible ? 1 : 0 }}>
                                    {camaro.description}
                                </p>
                            </div>
                            <div className="right-overlay">
                                <p className="camaro-trims" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                    Trims: {camaro.trims}
                                </p>
                                <p className="camaro-hp" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                    Horsepower - {camaro.horsepower}
                                </p>
                                <p className="camaro-zero" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                    0-60 - {camaro.zeroToSixty}
                                </p>
                                <p className="camaro-msrp" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                    MSRP - {camaro.MSRP}
                                </p>
                                <p className="camaro-forum" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                    More Info - <a href={camaro.forumLink} target="_blank" rel="noopener noreferrer">{camaro.forumLink}</a>
                                </p>
                                <p className="camaro-credit" style={{ opacity: objOpacity && factsVisible ? 1 : 0 }}>
                                    Credit: {/^https?:\/\//.test(camaro.credit) ? (
                                    <a href={camaro.credit} target="_blank" rel="noopener noreferrer">{camaro.credit}</a>
                                ) : (
                                    camaro.credit
                                )}
                                </p>
                            </div>
                        </>
                    )}

                </div>
            </div>

            {/* Navigation Arrows */}

            {/*Back to  home page on 1967 year*/}
            {intYear === 1967 && (
                <Link to={`/`}>
                    <svg className="homeicon" style={{opacity: objOpacity ? 1 : 0 }} xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                    </svg>
                </Link>
            )}


            {prevIndex != null && (
                <Link to={`/camaro/${prevIndex}`}>
                    <svg className="leftarrow" style={{ opacity: objOpacity ? 1 : 0 }} xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewBox="0 -960 960 960">
                        <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Z" />
                    </svg>
                </Link>
            )}

            {nextIndex != null && (
                <Link to={`/camaro/${nextIndex}`}>
                    <svg className="rightarrow" style={{ opacity: objOpacity ? 1 : 0 }} xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewBox="0 -960 960 960">
                        <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Z" />
                    </svg>
                </Link>
            )}
        </div>
    );
}

export default CamaroPage;
