import './home.css'

import Starter from "../starter/Starter.jsx";
import { useState, useEffect } from "react";
const Home = () => {

    const [showStarter, setShowStarter] = useState(false);
    const [downColor1, setDownColor1] = useState("#f2f7de");
    const [downColor2, setDownColor2] = useState("#f2f7de");
    const [downColor3, setDownColor3] = useState("#f2f7de");
    if (showStarter) {
        return <Starter />;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const myWorks = document.getElementsByClassName("wave-container")
        const wave1 = document.getElementsByClassName("wave-text1");
        const worksVideos = document.getElementById('videoList1');
        const experiencesVideos = document.getElementById('videoList2');

        const handleMouseEnter = (value) => {
            value.classList.remove("hidden");
            value.classList.add("active");

        };
        const handleMouseLeave = (value) => {
            value.classList.remove("active");
            value.classList.add("hidden");
        };

        worksVideos.classList.add("hidden");
        experiencesVideos.classList.add("hidden");

        const addColor = () => {
            setDownColor1("#51554a")
            setDownColor3("#51554a")
        }
        const removeColor = () => {
            setDownColor1("#f2f7de")
            setDownColor3("#f2f7de")
        }
        myWorks[1].addEventListener("mouseenter", () => handleMouseEnter(worksVideos));
        myWorks[1].addEventListener("mouseenter", () => addColor());
        myWorks[1].addEventListener("mouseleave", () => removeColor());
        myWorks[1].addEventListener("mouseleave", () => handleMouseLeave(worksVideos));
        myWorks[2].addEventListener("mouseenter", () => handleMouseEnter(experiencesVideos));
        myWorks[2].addEventListener("mouseleave", () => handleMouseLeave(experiencesVideos));
    })

    return (
        <div className="page">
            <div className="pageHomeTop" >
                <div id="videoList1">
                    <video className = "rounded-2xl shadow-lg" muted autoPlay loop >
                        <source src="src/videos/game.mp4" type="video/mp4" />
                    </video>
                    <video className="rounded-2xl shadow-lg " muted autoPlay loop>
                        <source src="src/videos/smartContestS3.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="videoList2">
                    <video className ="rounded-2xl shadow-lg gameVideo" muted autoPlay loop >
                        <source src="src/videos/experiences.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="pageHomeBar">
                <div id="titleList">
                    <div className="wave-container">
                        <h1 className="wave-text1 title" style={{ color: downColor1}}>
                            <span>M</span><span>E</span>
                        </h1>
                    </div>
                    <div className="wave-container">
                        <h1 className="wave-text2 title" style={{ color: downColor2}}>
                            <span>M</span><span>Y</span>
                        </h1>
                        <h1 className="wave-text2 title" style={{ color: downColor2}}>
                            <span>W</span><span>O</span><span>R</span><span>K</span><span>S</span>
                        </h1>
                    </div>
                    <div className="wave-container">
                        <h1 className="wave-text2 title" style={{ color: downColor3}}>
                            <span>E</span><span>X</span><span>P</span><span>E</span><span>R</span><span>i</span><span>E</span><span>N</span><span>C</span><span>E</span><span>S</span>
                        </h1>
                    </div>
                </div>

            </div>

            <div className="pageHomeBottom">
                <div className="logo">
                    <div className="logo-display" onClick={() => setShowStarter(true)}>
                        <h1 className="logo-text title" >&lt;</h1>
                        <h1 className="logo-slash title">/</h1>
                        <h1 className="logo-text title">&gt;</h1>
                    </div>
                    <div className="logo-extension"></div>
                </div>
            </div>
            <div className="ghost"></div>
        </div>

    )
}

export default Home