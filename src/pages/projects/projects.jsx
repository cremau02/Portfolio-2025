import './projects.css';
import { useEffect, useState } from "react";

const Projects = () => {

    const projectData = [
        {
            id: 1,
            title: 'Smart Campus',
            image: 'src/videos/logo_smart.png',
            color: "#2ba801",
            targetVideo: 'videoList2',
            description: `A Sustaibnable project which improve our dependency to the global warming`
        },
        {
            id: 2,
            title: 'Escape The Mine',
            image: 'src/videos/logo_escape.png',
            color: "#b8906c",
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

            <div className="section1" style={{ transform: `scale(${size})` }}>
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
                {projectData
                    .filter(item => item.id === projectIdSelected)
                    .map((project) => (
                        <div>
                            <div className="div-title">
                                <img className="logo-title" src={project.image} alt="photo de profil"></img>
                                <a id="title-name" style={{ color: color }}>{project.title}</a>
                                <div id="title-description">
                                    <a style={{ color: color}}>" </a>
                                    <a>{project.description}</a>
                                    <a style={{ color: color }}> "</a>
                                </div>
                            </div>
                            <div className="div-main">
                                <div className="main-videos">
                                    <video className="rounded-2xl shadow-lg main-video" muted autoPlay loop>
                                        <source src="src/videos/smartContestS3.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="main-description">
                                    <a className="main-description-title">An Ambitious project</a>
                                    <a className="main-description-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div> LISTE COMPETENCES</div>
            <div> GESTION D'EQUIPE</div>
            <div> PARTICIPANTS</div>
        </div>
    )
};

export default Projects;