const AboutMe = () => {
    return (
        <div className="about-con">
            <div className="bio-and-tech">
                <div className="bio-con">
                    <div className="bio-header">
                        About
                    </div>
                    <div className="bio-copy">
                        <p>{"Hi, my name's Ed!"}</p>
                        <p>{"I'm a philosophy graduate and a self-taught programmer."}</p>
                        <p>{"I build full-stack web applications for fun, and hopefully someday soon, as a professional too!"}</p>
                        <p>{"In my free time, I like to cook, lift weights, study Mandarin, play games, and spend time with loved ones."}</p>

                    </div>
                </div>
                <div className="tech-con">
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img className="tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe;