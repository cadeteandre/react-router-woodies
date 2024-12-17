import logoImg from "../../../public/images/site-logo.png";
import footerImg from "../../../public/images/Footer.png";
import "./Footer.css";

const Footer = () => {
    return (  
        <footer>
            <div className="footerLine"></div>
            <img src={logoImg} alt="logo-img" />
            <div className="footer__text">
                <p>{'(012) 8967453'}</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
                <p className="copyright">© 2020 WOODIES</p>
            </div>
            <img className="footer__img" src={footerImg} alt="footer-img" />
        </footer>
    );
}

export default Footer;