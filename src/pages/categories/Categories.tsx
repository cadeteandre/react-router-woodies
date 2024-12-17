import { Link } from "react-router-dom";
import logoFlower from "../../../public/images/flower-logo.png";
import "./Categories.css";

const Categories = () => {
    return (  
        <section className="categories">
            <div className="categories__title">
                <img src={logoFlower} alt="logo" />
                <h3>What we have</h3>
                <div className="line"></div>
                <h1>Products</h1>
            </div>
            <div className="categories__images">
                <div className="categories__img jenson__img">
                    <h4>Jenson</h4>
                    <Link to={'/jenson'}>
                        <button>Shop now</button>
                    </Link>
                </div>
                <div className="categories__img deon__img">
                    <h4>Deon</h4>
                    <Link to={'/deon'}>
                        <button>Shop now</button>
                    </Link>
                </div>
                <div className="categories__img krisha__img">
                    <h4>Krisha</h4>
                    <Link to={'/krisha'}>
                        <button>Shop now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Categories;