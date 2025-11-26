import './projects.css';
import { useEffect, useState } from "react";

const Projects = () => {

    const projectData = [
        {
            id: 1,
            title: 'Smart Campus',
            image: 'src/videos/logo_smart.png',
            color: "#2ba801",
            targetVideo: 'videoList2'
        },
        {
            id: 2,
            title: 'Escape The Mine',
            image: 'src/videos/logo_escape.png',
            color: "#b8906c",
            targetVideo: 'videoList1'
        },
    ];

    const initialState = { main: null };
    const [position, setPosition] = useState(initialState);
    const [color, setColor] = useState("#ffffff");
    const [size, setSize] = useState(1);
    const [section3, setSection3] = useState(true);
    const [projectSelected, setProjectSelected] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 375) {
                setSize(0.5);
            } else {
                setSize(1);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const v1 = document.getElementById('videoList1');
        const v2 = document.getElementById('videoList2');
        if (v1) v1.classList.add("hidden");
        if (v2) v2.classList.add("hidden");
    }, []);

    const getPosition = (id) => {
        return Object.keys(position).find(key => position[key] === id);
    }

    const handleClick = (clickedId) => {
        if (clickedId === position.main) {
            setColor("#ffffff");
            setSection3(true);
            setProjectSelected(false);
            return setPosition({ main: null });
        }
        setSection3(false);
        setProjectSelected(true);
        setColor(projectData.find(project => project.id === clickedId).color);
        setPosition({ main: clickedId });
    }

    const handleMouseEnter = (videoId) => {
        const videoElement = document.getElementById(videoId);
        if (videoElement) {
            videoElement.classList.remove("hidden");
            videoElement.classList.add("active");
        }
    };

    const handleMouseLeave = (videoId) => {
        const videoElement = document.getElementById(videoId);
        if (videoElement) {
            videoElement.classList.remove("active");
            videoElement.classList.add("hidden");
        }
    };

    return (
        <div className="projectPage">
            <div className="logo-box" >
                <div className="logo-top" style={{ transform: `scale(${size})` }}>
                    <h1 className="logo-text title" style={{ color: color }}>&lt;</h1>
                    <h1 className="logo-slash title" style={{ color: color }}>/</h1>
                    <h1 className="logo-text title" style={{ color: color }}>&gt;</h1>
                </div>
            </div>

            <div className="section1">
                <div id="videoList1" className="hidden">
                    <video className="rounded-2xl shadow-lg" muted autoPlay loop >
                        <source src="src/videos/game.mp4" type="video/mp4" />
                    </video>
                    <video className="rounded-2xl shadow-lg" muted autoPlay loop >
                        <source src="src/videos/game.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="videoList2" className="hidden">
                    <video className="rounded-2xl shadow-lg " muted autoPlay loop>
                        <source src="src/videos/smartContestS3.mp4" type="video/mp4" />
                    </video>
                    <video className="rounded-2xl shadow-lg " muted autoPlay loop>
                        <source src="src/videos/SMARTCONTESTS4.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="section2" hidden={!section3} disabled={!section3}>
                <div className="project-starter">
                    <div className="listProject">
                        {!projectSelected && projectData.map((project) => (
                            <div
                                key={project.id}
                                className={`project ${getPosition(project.id)}`}
                                onClick={() => handleClick(project.id)}
                                onMouseEnter={() => handleMouseEnter(project.targetVideo)}
                                onMouseLeave={() => handleMouseLeave(project.targetVideo)}
                            >
                                <img className="project-logo" src={project.image} alt="photo de profil"></img>
                            </div>
                        ))}
                    </div>
                    <div className="project-choice-title">
                        <p>{position.main ? undefined : "select a project."}</p>
                    </div>
                </div>
            </div>
            <div className="section3" hidden={section3}>
                <div className="project-title">
                    <div className="word">
                        <span>S</span>
                        <span>M</span>
                        <span>A</span>
                        <span>R</span>
                        <span>T</span>
                    </div>
                    <div className="word1">
                        <span>C</span>
                        <span>A</span>
                        <span>M</span>
                        <span>P</span>
                        <span>U</span>
                        <span>S</span>
                    </div>
                </div>
                <div> OBJECTIF</div>
                <div> LISTE COMPETENCES</div>
                <div> GESTION D'EQUIPE</div>
                <div> PARTICIPANTS</div>
            </div>
        </div>
    )
};

export default Projects;