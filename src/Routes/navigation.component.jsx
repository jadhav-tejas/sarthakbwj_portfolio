import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import '../Styles/navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
        <nav className="nav">
            <div className="nav__left">
                <h1 className="nav__name">Sarthak Bharadwaj</h1>
            </div>
            <div className="nav__right">
                <a href="#yoga" className="nav__link">Yoga</a>
                <a href="#permaculture" className="nav__link">Permaculture</a>
                <a href="#contact" className="nav__link">Contact Me</a>
            </div>
        </nav>
        <Outlet />
        </Fragment>
    );
};

export default Navigation;