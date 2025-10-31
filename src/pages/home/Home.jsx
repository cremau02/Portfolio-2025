import './home.css'
import React from "react";
import Starter from "../starter/Starter.jsx";
import { useState } from "react";
const Home = () => {

    const [showStarter, setShowStarter] = useState(false);

    if (showStarter) {
        return <Starter />;
    }


    return (
        <div className="page">
            <div className="pageHomeTop">
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