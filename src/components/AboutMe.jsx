import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Projects from "./Projects";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const AboutMe = () => {

    const [showProjects, setShowProjects] = useState(false);

    const handleProjectButton = () => {
        setShowProjects(true);
    };

    const handleAboutButton = () => {
        setShowProjects(false);
    }

    return (
        <>
            <CSSTransition in={showProjects} timeout={500} classNames="slide2" unmountOnExit>
                <div className="projects-con">
                    <div className="about-button-con">
                        <button className="projects-button" onClick={handleAboutButton}>
                            <FaArrowLeft/>
                            About
                        </button>
                    </div>
                    <Projects/>
                </div>
            </CSSTransition>
            <CSSTransition in={!showProjects} timeout={500} classNames="slide" unmountOnExit>
                <div className="about-con">
                    <div className="bio-and-tech">
                        <div className="bio-con">
                            <div className="bio-copy">
                                <p>{"Hi, my name's Ed!"}</p>
                                <p>{"I'm a philosophy graduate and a self-taught programmer."}</p>
                                <p>{"I build full-stack web applications for fun, and aim to become a professional!"}</p>
                                <p>{"In my free time, I like to cook, workout, study Mandarin, and play games."}</p>

                            </div>
                        </div>
                        <div className="tech-con">
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                            <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                        </div>
                    </div>
                    <div className="projects-button-con">
                        <button className="projects-button" onClick={handleProjectButton}>
                            <FaArrowRight/>
                            Projects
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default AboutMe;