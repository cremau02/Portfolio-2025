import './home.css'

import Starter from "../starter/Starter.jsx";
import { useState, useEffect } from "react";
const Home = () => {
    const myWorks = document.getElementsByClassName("wave-container")
    const video = document.getElementById('videoList');
    const [showStarter, setShowStarter] = useState(false);
    const [listVideoActive, setListVideoActive] = useState(true);
    if (showStarter) {
        return <Starter />;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        myWorks[1].addEventListener("mouseleave", () => {
            video.classList.toggle('hidden');
        });
        myWorks[1].addEventListener("mouseleave", () => {
            video.classList.toggle('active');
        });


    })

    return (
        <div className="page">
            <div className="pageHomeTop">
                <div id="videoList" hidden={listVideoActive}>
                    <video className = "rounded-2xl shadow-lg" muted autoPlay loop >
                        <source src="src/videos/game.mp4" type="video/mp4" />
                    </video>
                    <video className="rounded-2xl shadow-lg " muted autoPlay loop>
                        <source src="src/videos/smartContestS3.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="pageHomeBar">
                <div id="titleList">
                    <div className="wave-container">
                        <h1 className="wave-text1 title">
                            <span>M</span><span>E</span>
                        </h1>
                    </div>
                    <div className="wave-container">
                        <h1 className="wave-text2 title">
                            <span>M</span><span>Y</span>
                        </h1>
                        <h1 className="wave-text2 title">
                            <span>W</span><span>O</span><span>R</span><span>K</span><span>S</span>
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