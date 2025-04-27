import React, { useState } from 'react';
import './header.scss?v=1.1';
import Icon from '../../include/Icon';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <header className="header container">
            <div className="header-wrapper">
                <a className="logo" href="./index.html">yachtjet </a>
                <nav className="header-nav">
                    <a href="#about" className="header-link current">About</a>
                    <a href="#yahts" className="header-link">Yachts</a>
                    <a href="#reviews" className="header-link">Reviews</a>
                </nav>
                <ul className="social-links-list">
                    <li className="social-item">
                        <a href="https://www.instagram.com/goitclub/" className="link-icon" target="_blank"
                            rel="nofollow noopener noreferrer" aria-label="Instagram GoIT">
                            <Icon id="#icon-instagram"
                                className="icon"
                                width="24" height="24"
                            />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.youtube.com/c/GoIT" className="link-icon" target="_blank" rel="nofollow noopener noreferrer"
                            aria-label="Youtube GoIT">
                            <Icon id="#icon-youtube"
                                className="icon"
                                width="24" height="24"
                            />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.facebook.com/goITclub/" className="link-icon" target="_blank"
                            rel="nofollow noopener noreferrer" aria-label="Facebook GoIT">
                            <Icon id="#icon-facebook"
                                className="icon"
                                width="24" height="24"
                            />
                        </a>
                    </li>
                </ul>
                {/* Бургер icon */}
                <button onClick={handleClick} className="burger-btn" type="button" id="mobile-menu-open" aria-label="mobile menu open" data-menu-open>
                    <Icon id="#icon-burger"
                        className="burger-icon"
                        width="28" height="28"
                    />
                </button>
            </div>

            {/* NameMobile menu */}
            <div className={`mobile-menu ${isActive ? 'is-open' : ''}`}>
                <div className="wrap">
                    <div className="mobile-window-header">
                        <a href="./index.html" className="logo mobile">yachtjet </a>
                        <button onClick={handleClick} className="burger-btn" type="button" id="mobile-menu-close" aria-label="mobile menu close" data-menu-close>
                            <Icon id="#icon-close"
                                className="icon-close"
                                width="28"
                                height="28"
                            />
                        </button>
                    </div>

                    <nav>
                        <ul className="mobile-list">
                            <li>
                                <a className="mobile-link" href="#about">About</a>
                            </li>
                            <li>
                                <a className="mobile-link" href="#yahts">Yachts</a>
                            </li>
                            <li>
                                <a className="mobile-link" href="#reviews">Reviews</a>
                            </li>
                        </ul>
                    </nav>

                    <ul className="social-links-list-modal">
                        <li className="social-item-modal">
                            <a href="https://www.instagram.com/goitclub/" className="icon-modal" target="_blank"
                                rel="nofollow noopener noreferrer" aria-label="Instagram GoIT">
                                <Icon id="#icon-instagram"
                                    className="icon-modal-svg"
                                    width="24"
                                    height="24"
                                />
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="https://www.youtube.com/c/GoIT" className="icon-modal" target="_blank" rel="nofollow noopener noreferrer"
                                aria-label="Youtube GoIT">
                                <Icon id="#icon-youtube"
                                    className="icon-modal-svg"
                                    width="24"
                                    height="24"
                                />
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="https://www.facebook.com/goITclub/" className="icon-modal" target="_blank"
                                rel="nofollow noopener noreferrer" aria-label="Facebook GoIT">
                                <Icon id="#icon-facebook"
                                    className="icon-modal-svg"
                                    width="24"
                                    height="24"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </header >
    )
}

export default Header