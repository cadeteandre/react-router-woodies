import logoFlower from "../../../public/images/flower-logo.png";
import DefaultLayout from "../../components/defaultLayout/DefaultLayout";
import deonImg from "../../../public/images/Stuhl.png";


const Deon = () => {
    return (  
        <section className="about">
            <div className="about__title">
                <img src={logoFlower} alt="logo" />
                <h3>Deon</h3>
                <div className="line"></div>
                <h1>Products</h1>
            </div>
            <DefaultLayout
                imgUrl={deonImg}
                pText="Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
            />
        </section>
    );
}

export default Deon;