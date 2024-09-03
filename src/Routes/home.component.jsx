import '../Styles/home.styles.css';
import profileImage from '../Utils/pfp.jpeg'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
            <div className="home-image">
                    <img 
                        src={profileImage} 
                        alt="Sarthak Bharadwaj" 
                        className="home-image__img" 
                    />
                </div>
                <div className="home-text">
                    <p>Sarthak is a curious individual wanting to explore his topics of interest and the 'Self' within. With the help of philosophies and thinking frameworks of "Yoga", "Vedanta" and "Permaculture" he has been able to find his calling of working for the Holistic Development of the society through the resources and intellect accessible to him.</p>
                </div>

            </div>
        </div>
    );
};
  

export default Home;