import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/footer.styles.css'; // Make sure to create this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://github.com/sarthakbwj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/sarthak-bhardwaj-6b9475199/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:sarthakbwj@outlook.com" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
