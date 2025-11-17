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
        main: 2,
        right: 3,
    };

    const [position, setPosition] = useState(initialState);

    const getPosition = (id) => {
        return Object.keys(initialState).find(key => initialState[key] === id)
    }
    const handleClick = (id) => {
        const clickedPosition = (id) => getPosition(id)

        if (clickedPosition(id) === 'main') {
            return ;
        }
        if (clickedPosition(id) === 'left') {
            setPosition({...position, main: id})
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
                    <div className={`project ${getPosition(project.id)}`} key={project.id} onClick={handleClick} >{project.title}</div>
                ) )}
            </div>
        </div>
        <div className="section2"></div>
      </div>
  )
};

export default Projects;