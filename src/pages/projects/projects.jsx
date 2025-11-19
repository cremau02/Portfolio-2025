import './projects.css';
import {useEffect, useState} from "react";


const Projects = () => {

    const projectData = [
        { id: 1, title: 'Projet 1' },
        { id: 2, title: 'Projet 2' },
        { id: 3, title: 'Projet 3' },
    ];

    const initialState = {
        left: 1,
        main : 2,
        right: 3,
    };

    const [position, setPosition] = useState(initialState);

    document.addEventListener('scroll', () => console.log(window.scrollY))
    const logo = document.getElementsByClassName('logo-box');

    const getPosition = (id) => {
        return Object.keys(position).find(key => position[key] === id)
    }


    const handleClick = (clickedId) => {
        if (clickedId.position === 'main') {
            return ;
        }
        const clicked = getPosition(clickedId)
        console.log(clicked)
        if (clicked === 'left') {
            const newPositions = {
                main: position.left,
                right: position.main,
                left: position.right,
            };
            setPosition(newPositions);
        }

        if (clicked === 'right') {
            const newPositions = {
                main: position.right,
                left: position.main,
                right: position.left,
            };
            setPosition(newPositions);
        }
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
            <div className="listProject">
                {projectData.map((project) => (
                    <div className={`project ${getPosition(project.id)}`} onClick={() => handleClick(project.id)} ></div>
                ) )}
            </div>
        </div>
        <div className="section2"></div>
      </div>
  )
};

export default Projects;