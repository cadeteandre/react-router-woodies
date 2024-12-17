import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import "./RootLayout.css";
import Footer from "../components/footer/Footer";

const RootLayout = () => {

    const location = useLocation();
    const isHome = location.pathname === '/';

    return (  
        <div className={`app__container ${isHome ? 'home__background' : 'default__background'}`}>
            <Header />
            <main className={`outlet ${isHome ? 'home__padding' : 'default__padding'}`}>
                <Outlet />
            </main>
            {!isHome && <Footer />}
        </div>
    );
}

export default RootLayout;