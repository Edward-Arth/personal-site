import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";
import Resume from "../assets/EdwardStrahlendorf.pdf";

const Header = () => {
    return (
        <div className="header-con">
            <div className="name-title-links">
                <div className="name">Edward Strahlendorf</div>
                <div className="title">Full-Stack Developer</div>
                <div className="links-con">
                    <a href='https://github.com/Edward-Arth' target="blank">
                        <div className="links">
                            <AiOutlineGithub />
                            <div className="link-text">GitHub</div>
                        </div>
                    </a>
                    <a href='https://linkedin.com/in/edward-strahlendorf' target="blank">
                        <div className="links">
                            <AiOutlineLinkedin/>
                            <div className="link-text">LinkedIn</div>
                        </div>
                    </a>
                    <a href={Resume} target="blank">
                        <div className="links">
                            <RiAccountBoxFill />
                            <div className="link-text">Resume</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="site-directory">
                <div className="site-page"></div>
                <div className="site-page"></div>
                <div className="site-page"></div>
            </div>
        </div>
    )
}

export default Header;