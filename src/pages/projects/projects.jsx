import './projects.css';
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const projectData = [
        {
            id: 1,
            title: 'Smart Campus',
            image: 'src/videos/logo_smart.png',
            color: "#2ba801",
            secondaryColor: "#DAE6D6FF",
            targetVideo: 'videoList2',
            video1 : 'src/videos/smartContestS3.mp4',
            video2 : 'src/videos/SMARTCONTESTS4.mp4',
            description: `A Sustaibnable project which improve our dependency to the global warming`
        },
        {
            id: 2,
            title: 'Escape The Mine',
            image: 'src/videos/logo_escape.png',
            video1: 'src/videos/game.mp4',
            video2: 'src/videos/game.mp4',
            color: "#b8906c",
            secondaryColor: "#e4dad0",
            targetVideo: 'videoList1',
            description: `A simple video games inspired on the iconic and the most famous of the world`
        },
    ];


    const initialState = { main: null };
    const [position, setPosition] = useState(initialState);
    const [color, setColor] = useState("#ffffff");
    const [size, setSize] = useState(1);
    const [section3, setSection3] = useState(true);
    const [projectSelected, setProjectSelected] = useState(false);
    const [projectIdSelected, setProjectIdSelected] = useState(0);
    const [scrollValue, setScrollValue] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 200) {
                const newScale = 1 - ((scrollPosition-300) / 800);
                const clampedScale = Math.min(Math.max(newScale, 0.5), 1);
                setScrollValue(clampedScale);
            }
            if (scrollPosition > 375) {
                setSize(0.5);
            } else {
                setSize(1);
            }
            console.log("scroll position", scrollValue);
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


    const wrapperRef = useRef(null);
    const textSliderRef = useRef(null);
    const video2Ref = useRef(null);
    const video1Ref = useRef(null)

    useGSAP(() => {
        if (!wrapperRef.current || !textSliderRef.current) return;
        ScrollTrigger.getAll().forEach(t => t.kill());

        const totalHeight = textSliderRef.current.scrollHeight;
        const windowHeight = textSliderRef.current.parentElement.offsetHeight;
        const maxDistance = totalHeight - windowHeight;

        const triggerPointY = 400;
        const triggerTime = maxDistance > 0 ? (triggerPointY / maxDistance) : 0;


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "center center",
                end: "+=2000",
                pin: true,
                anticipatePin: 1,
                scrub: 0.5
            }
        });

        tl.to(textSliderRef.current, {
            y: -maxDistance,
            ease: "none",
            duration: 1
        }, 0);

        tl.to(video2Ref.current, {
            opacity: 1,
            ease: "none",
            duration: 0.1
        }, triggerTime);

        tl.to(video1Ref.current, {
            opacity: 0,
            ease: "none",
            duration: 0.1
        },triggerTime) ;

    }, [projectIdSelected, section3]);

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
        setProjectIdSelected(clickedId);
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

            <div className="section1" style={{ transform: `scale(${scrollValue})` }}>
                {!projectSelected && projectData.map((project) => (
                    <div id={project.targetVideo} className="hidden" >
                        <video className="rounded-2xl shadow-lg" muted autoPlay loop >
                            <source src={project.video1} type="video/mp4" />
                        </video>
                        <video className="rounded-2xl shadow-lg" muted autoPlay loop >
                            <source src={project.video2} type="video/mp4" />
                        </video>
                    </div>
                ))}
                {projectSelected && projectData.filter((project) => project.id === projectIdSelected)
                    .map((project) => (
                    <div id={project.targetVideo} >
                        <video className="rounded-2xl shadow-lg" muted autoPlay loop >
                            <source src={project.video1} type="video/mp4" />
                        </video>
                        <video className="rounded-2xl shadow-lg" muted autoPlay loop >
                            <source src={project.video2} type="video/mp4" />
                        </video>
                    </div>
                ))}
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
                        <p>{position.main ? undefined : "Selectionne un projet."}</p>
                    </div>
                </div>
            </div>
            <div className="section3" hidden={section3}>
                {projectData
                    .filter(item => item.id === projectIdSelected)
                    .map((project) => (
                        <div key={project.id}>
                            <div className="div-title">
                                <img className="logo-title" src={project.image} alt="photo de profil"></img>
                                <motion.a id="title-name" style={{ color: color }}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.8, ease: "easeOut" }}
                                          viewport={{ once: true }}>{project.title}
                                </motion.a>
                                <motion.div id="title-description" initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay : .2, ease: "easeOut" }}
                                            viewport={{ once: true }}>
                                    <a style={{ color: color}}>" </a>
                                    <a>{project.description}</a>
                                    <a style={{ color: color }}> "</a>
                                </motion.div>
                            </div>
                            <div
                                className="div-main"
                                style={{backgroundColor: project.secondaryColor}}
                                ref={wrapperRef}
                            >
                                <motion.div
                                    className="video-mask"
                                >
                                    <div className="video-item" ref={video1Ref} style={{ zIndex: 1 }}>
                                        <video className="main-video" muted autoPlay loop>
                                            <source src="src/videos/smartContestS3.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="video-item" ref={video2Ref} style={{ zIndex: 2, opacity: 0 }}>
                                        <video className="main-video-phone" muted autoPlay loop>
                                            <source src="src/videos/smartcontestS4-phone.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </motion.div>
                                <div className="text-window">
                                    <div ref={textSliderRef} className="text-slider" >
                                        <div className="text-slide-item">
                                            <span className="main-description-title" style={{color : project.color}}>
                                                Empowering users through sustainable data monitoring.
                                            </span>
                                            <p className="main-description-text">
                                                Developed by a team of five students as part of our Computer Science Bachelor’s degree (BUT Informatique), Smart Campus is an innovative IoT solution designed to bridge the gap between occupant comfort and environmental responsibility. The core objective of the project is to provide room users with an intelligent information and advice tool. Rather than simply displaying raw data, the system utilizes a custom data acquisition unit to analyze the environment and suggest concrete, eco-friendly actions in real-time.
                                            </p>
                                        </div>
                                        <div className="text-slide-item">
                                            <span className="main-description-title" style={{color : project.color}}>
                                                Another Chapter.
                                            </span>
                                            <p className="main-description-text">
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="competences">
                                <div className="carousel">
                                    <div className="group">
                                        <div className="card">1</div>
                                        <div className="card">2</div>
                                        <div className="card">3</div>
                                        <div className="card">4</div>
                                        <div className="card">5</div>
                                        <div className="card">6</div>
                                    </div>
                                    <div aria-hidden className="group">
                                        <div className="card">1</div>
                                        <div className="card">2</div>
                                        <div className="card">3</div>
                                        <div className="card">4</div>
                                        <div className="card">5</div>
                                        <div className="card">6</div>
                                    </div>
                                </div>
                            </div>
                            <div> GESTION D'EQUIPE</div>
                            <div> PARTICIPANTS</div>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default Projects;