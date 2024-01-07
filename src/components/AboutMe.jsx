import PersonalPicture from "../assets/PersonalPicture.jpg";

const AboutMe = () => {
    return (
        <div className="about-con">
            <div className="picture-and-bio">
                <div className="picture-con">
                    <img src={PersonalPicture} id="personal-picture"/>
                </div>
                <div className="bio-con"></div>
            </div>
            
        </div>
    )
}

export default AboutMe;