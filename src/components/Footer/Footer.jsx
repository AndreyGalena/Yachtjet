import React from 'react';
import './footer.scss';


const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer-container">
                <div className="footer-container-nav">
                    <h2><a className="footer-logo" href="./index.html">yachtjet</a></h2>
                    <nav className="footer-nav">
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <a className="footer-nav-link" href="#about">ABOUT</a>
                            </li>
                            <li className="footer-nav-item">
                                <a className="footer-nav-link" href="#yahts">YACHTS</a>
                            </li>
                            <li className="footer-nav-item">
                                <a className="footer-nav-link" href="#reviews">REVIEWS</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul className="footer-icons-list">
                    <li className="footer-icons-item">
                        <a className="footer-icons-link" href="https://www.instagram.com/goitclub/" target="_blank"
                            rel="nofollow noopener noreferrer" aria-label="Instagram GoIT">
                            <svg width="24" height="24" className="footer-icon">
                                <use href="/img/icons.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer-icons-item">
                        <a className="footer-icons-link" href="https://www.youtube.com/c/GoIT" target="_blank"
                            rel="nofollow noopener noreferrer" aria-label="Youtube GoIT">
                            <svg width="24" height="24" className="footer-icon">
                                <use href="/img/icons.svg#icon-youtube"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer-icons-item">
                        <a className="footer-icons-link" href="https://www.facebook.com/goITclub/" target="_blank"
                            rel="nofollow noopener noreferrer" aria-label="Facebook GoIT">
                            <svg width="24" height="24" className="footer-icon">
                                <use href="/img/icons.svg#icon-facebook"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <p className="footer-text">
                    No matter which yacht you choose, our experienced crew will ensure that
                    your journey is smooth and enjoyable.
                </p>
                <div className="footer-disclaimer-container">
                    <p className="footer-disclaimer">2023. Yacht Adventures</p>
                    <a className="footer-disclaimer" href="./index.html">Privacy Police</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

