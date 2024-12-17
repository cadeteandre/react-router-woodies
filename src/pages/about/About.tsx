import logoFlower from "../../../public/images/flower-logo.png";
import aboutImg from "../../../public/images/About.png";
import "./About.css";

const About = () => {
    return (  
        <section className="about">
            <div className="about__title">
                <img src={logoFlower} alt="logo" />
                <h3>Who we are</h3>
                <div className="line"></div>
                <h1>ABOUT US</h1>
            </div>
            <div className="about__description">
                <img src={aboutImg} alt="about-img" />
                <div className="about__description__text">
                    <h3><span>WOODIES</span> is the <span>home of modern wooden furniture</span></h3>
                    <p>
                        the answer to your need for furniture with shapes, sizes and colors. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;