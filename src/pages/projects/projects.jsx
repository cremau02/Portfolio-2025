import './projects.css';
import {useEffect, useState} from "react";


const Projects = () => {

    const projectData = [
        { id: 1, title: 'Smart Campus', image :'src/videos/logo_smart.png'},
        { id: 2, title: 'Escape The Mine', image:'src/videos/logo_escape.png'},

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

        myWorks[0].addEventListener("mouseenter", () => handleMouseEnter(experiencesVideos));
        myWorks[0].addEventListener("mouseleave", () => handleMouseLeave(experiencesVideos));
        myWorks[1].addEventListener("mouseenter", () => handleMouseEnter(worksVideos));
        myWorks[1].addEventListener("mouseleave", () => handleMouseLeave(worksVideos));
    })




    const initialState = { main: null };
    const logo = document.getElementsByClassName('logo-box');
    const [position, setPosition] = useState(initialState);
    document.addEventListener('scroll', () => console.log(window.scrollY))
    const getPosition = (id) => {
        return Object.keys(position).find(key => position[key] === id)
    }

    const handleClick = (clickedId) => {
        console.log("clickedId"+clickedId)
        console.log("posotion"+position.main)
        if (clickedId === position.main) {
            return setPosition({ main: null });
        }
        setPosition({ main: clickedId });
    }

    return (
      <div className="projectPage">
        <div className="logo-box">
          <div className="logo-top">
            <h1 className="logo-text title" >&lt;</h1>
            <h1 className="logo-slash title">/</h1>
            <h1 className="logo-text title">&gt;</h1>
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
            </div>
        </div>
        <div className="section2">
            <div className="project-starter">
                <div className="listProject">
                    {projectData.map((project) => (
                        <div className={`project ${getPosition(project.id)}`} onClick={() => handleClick(project.id)} >
                            <img className="project-logo" src={project.image} alt="photo de profil"></img>
                            <p> {project.title} </p>
                        </div>
                    ) )}
                </div>
                <div className="project-choice-title">
                    <p>{position.main ? undefined : "select  a  project."}</p>
                </div>
            </div>
        </div>
      </div>
  )
};

export default Projects;