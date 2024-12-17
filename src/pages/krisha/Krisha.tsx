import logoFlower from "../../../public/images/flower-logo.png";
import DefaultLayout from "../../components/defaultLayout/DefaultLayout";
import krishaImg from "../../../public/images/Schuesseln.png";


const Krisha = () => {
    return (  
        <section className="about">
            <div className="about__title">
                <img src={logoFlower} alt="logo" />
                <h3>Krisha</h3>
                <div className="line"></div>
                <h1>Products</h1>
            </div>
            <DefaultLayout
                imgUrl={krishaImg}
                pText="Krisha demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
            />
        </section>
    );
}

export default Krisha;