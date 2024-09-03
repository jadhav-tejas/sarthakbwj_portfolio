import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../Styles/navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
        <nav className="nav">
            <div className="nav__left">
                <h1 className="nav__name">Sarthak Bharadwaj</h1>
            </div>
            <div className="nav__right">
                <Link to="/yoga" className="nav__link">Yoga</Link>
                <Link to="/permaculture" className="nav__link">Permaculture</Link>
                <Link to="/contact" className="nav__link">Contact Me</Link>
            </div>
        </nav>
        <Outlet />
        </Fragment>
    );
};

export default Navigation;