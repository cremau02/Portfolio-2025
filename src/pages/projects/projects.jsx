import './projects.css';
import {useEffect, useState} from "react";


const Projects = () => {

    const projectData = [
        { id: 1, title: 'Smart Campus', image :'src/videos/logo_smart.png', color:"#2ba801"},
        { id: 2, title: 'Escape The Mine', image:'src/videos/logo_escape.png', color:"#b8906c"},
    ];

    useEffect(() => {
        const myWorks = document.getElementsByClassName("project")
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

        experiencesVideos.classList.add("hidden");
        worksVideos.classList.add("hidden");

        myWorks[0].addEventListener("mouseenter", () => handleMouseEnter(experiencesVideos));
        myWorks[0].addEventListener("mouseleave", () => handleMouseLeave(experiencesVideos));
        myWorks[1].addEventListener("mouseenter", () => handleMouseEnter(worksVideos));
        myWorks[1].addEventListener("mouseleave", () => handleMouseLeave(worksVideos));
    })




    const initialState = { main: null };
    const [position, setPosition] = useState(initialState);
    const [color, setColor] = useState("#ffffff")
    const [size, setSize] = useState(1)
    const [section3, setSection3] = useState(true)
    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition)
        if (scrollPosition > 375) {
            setSize(0.5)
        }
        else (
            setSize(1)
        )
    })

    const getPosition = (id) => {
        return Object.keys(position).find(key => position[key] === id)
    }

    const handleClick = (clickedId) => {
        if (clickedId === position.main) {
            setColor("#ffffff")
            setSection3(true)
            return setPosition({ main: null });
        }
        setSection3(false)
        setColor(projectData.find(project => project.id === clickedId).color)
        setPosition({ main: clickedId });
    }

    return (
        <div className="projectPage">
            <div className="logo-box" >
                <div className="logo-top" style={{ transform : `scale(${size})`}}>
                    <h1 className="logo-text title" style={{color : color}}>&lt;</h1>
                    <h1 className="logo-slash title" style={{color : color}}>/</h1>
                    <h1 className="logo-text title" style={{color : color}}>&gt;</h1>
                </div>
            </div>
        <div className="section1">
            <div id="videoList1">
                <video className = "rounded-2xl shadow-lg" muted autoPlay loop >
                    <source src="src/videos/game.mp4" type="video/mp4" />
                </video>
                <video className = "rounded-2xl shadow-lg" muted autoPlay loop >
                    <source src="src/videos/game.mp4" type="video/mp4" />
                </video>
            </div>
            <div id="videoList2">
                <video className="rounded-2xl shadow-lg " muted autoPlay loop>
                    <source src="src/videos/smartContestS3.mp4" type="video/mp4" />
                </video>
                <video className="rounded-2xl shadow-lg " muted autoPlay loop>
                    <source src="src/videos/SMARTCONTESTS4.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="section2">
            <div className="project-starter">
                <div className="listProject">
                    {projectData.map((project) => (
                        <div className={`project ${getPosition(project.id)}`} onClick={() => handleClick(project.id)} >
                            <img className="project-logo" src={project.image} alt="photo de profil"></img>
                        </div>
                    ) )}
                </div>
                <div className="project-choice-title">
                    <p>{position.main ? undefined : "select  a  project."}</p>
                </div>
            </div>
        </div>
        <div className="section3" hidden={section3}>

        </div>
      </div>
  )
};

export default Projects;