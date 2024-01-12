import textSentimentImg from "../assets/sentiment.PNG";
import epiphanyImg from "../assets/epiphany.PNG";
import ironworksImg from "../assets/ironworks.PNG";

const Projects = () => {
    const projectsInfo = [
        {projectName: "Text Sentiment Machine", image: textSentimentImg, link: "https://text-sentiment-machine.netlify.app/"},
        {projectName: "Ironworks Fitness", image: ironworksImg, link: "https://ironworks-fitness-demo.netlify.app/"},
        {projectName: "Epiphany Full-Stack Blog", image: epiphanyImg, link: "https://epiphany-blog.netlify.app/api"}
    ];
    return (
        <div className="projects-interior-con">
            {projectsInfo.map((project) => {
                return <a className="project-square" key={project.projectName} href={project.link} target="blank">
                    <div className="project-image-con">
                        <img src={project.image} alt={`${project.projectName} Image`} className="project-images"/>
                    </div>
                    <div className="project-name">{project.projectName}</div>
                </a>
            })}
        </div>
    )
}

export default Projects;