import DefaultLayout from "../../components/defaultLayout/DefaultLayout";
import tischImg from "../../../public/images/Tisch.png";
import logoFlower from "../../../public/images/flower-logo.png";

const Jenson = () => {
    return (  
        <section className="about">
            <div className="about__title">
                <img src={logoFlower} alt="logo" />
                <h3>Jenson</h3>
                <div className="line"></div>
                <h1>Products</h1>
            </div>
            <DefaultLayout
                imgUrl={tischImg}
                pText="Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
            />
        </section>
    );
}

export default Jenson;