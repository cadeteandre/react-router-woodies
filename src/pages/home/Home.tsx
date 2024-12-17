import homeImg from "../../../public/images/Home.png";
import "./Home.css";

const Home = () => {
    return (  
        <section className="home">
            <div className="home__info">
                <h3>Are you looking for <span>woodden furniture</span> for your place?</h3>
                <h1>This is the Right Place</h1>
                <button>Explore Categories</button>
            </div>
            <div className="home__img">
                <img src={homeImg} alt="coffee-table" />
            </div>
        </section>
    );
}

export default Home;