import './home.css'

import Starter from "../starter/Starter.jsx";
import { useState, useEffect } from "react";
const Home = () => {

    const [showStarter, setShowStarter] = useState(false);
    const [hovered, setHovered] = useState(null);
    const titles = [
        { id: 'works1', lines: [['M', 'E']] },
        { id: 'works2', lines: [['M', 'Y'], ['W', 'O', 'R', 'K', 'S']] },
        { id: 'experiences', lines: [['E', 'X', 'P', 'E', 'R', 'i', 'E', 'N', 'C', 'E', 'S']] },
    ];

    const downColorDefault = "#f2f7de";
    const downColorHover = "#51554a";

    if (showStarter) {
        return <Starter />;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const myWorks = document.getElementsByClassName("wave-container")
        const worksVideos = document.getElementById('videoList1');
        const experiencesVideos = document.getElementById('videoList2');
        const myPhotos = document.getElementById('videoList3');

        const handleMouseEnter = (value) => {
            value.classList.remove("hidden");
            value.classList.add("active");

        };
        const handleMouseLeave = (value) => {
            value.classList.remove("active");
            value.classList.add("hidden");

        };

        myPhotos.classList.add("hidden");
        worksVideos.classList.add("hidden");
        experiencesVideos.classList.add("hidden");

        myWorks[0].addEventListener("mouseenter", () => handleMouseEnter(myPhotos));
        myWorks[0].addEventListener("mouseleave", () => handleMouseLeave(myPhotos));
        myWorks[1].addEventListener("mouseenter", () => handleMouseEnter(worksVideos));
        myWorks[1].addEventListener("mouseleave", () => handleMouseLeave(worksVideos));
        myWorks[2].addEventListener("mouseenter", () => handleMouseEnter(experiencesVideos));
        myWorks[2].addEventListener("mouseleave", () => handleMouseLeave(experiencesVideos));
    }, [])

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
                <div id="videoList3" >
                    <img className="rounded-2xl shadow-lg"  src="src/videos/IMG_4686.JPEG" alt="photo de profil"></img>
                </div>
            </div>
            <div className="pageHomeBar">
                <div id="titleList">
                    {titles.map(({ id, lines }) => {
                        // Le titre survolé garde la couleur par défaut,
                        // les autres prennent la couleur hover (quand hovered != null)
                        const color = hovered === null || hovered === id ? downColorDefault : downColorHover;

                        return (
                            <div
                                key={id}
                                className="wave-container"
                                onMouseEnter={() => setHovered(id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {lines.map((line, i) => (
                                    <h1
                                        key={i}
                                        className={`wave-text${i + 1} title`}
                                        style={{ color }}
                                    >
                                        {line.map((char, idx) => (
                                            <span key={idx}>{char}</span>
                                        ))}
                                    </h1>
                                ))}
                            </div>
                        );
                    })}
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
        </div>

    )
}

export default Home