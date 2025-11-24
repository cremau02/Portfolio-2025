import './projects.css';
import {useEffect, useState} from "react";


const Projects = () => {

    const projectData = [
        { id: 1, title: 'Projet 1'},
        { id: 2, title: 'Projet 2'},
    ];

    const initialState = { main: null };
    const logo = document.getElementsByClassName('logo-box');
    const [position, setPosition] = useState(initialState);
    document.addEventListener('scroll', () => console.log(window.scrollY))
    const getPosition = (id) => {
        return Object.keys(position).find(key => position[key] === id)
    }

    console.log(position.main)
    const handleClick = (clickedId) => {
        if (position.id === 'main') {
            return ;
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
        </div>
        <div className="section2">
            <div className="project-starter">
                <div className="listProject">
                    {projectData.map((project) => (

                            <div className={`project ${getPosition(project.id)}`} onClick={() => handleClick(project.id)} ></div>

                    ) )}
                    </div>
                <div className="project-choice-title">
                    <p>{position.main ? undefined : "select a project."}</p>
                </div>
            </div>
        </div>
      </div>
  )
};

export default Projects;