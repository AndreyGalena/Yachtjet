import React from 'react';
import './hero.scss';


const Hero = () => {
    return (
        <section className="section hero">
            <div className="container">
                <h1 className="hero-title">
                    Explore the High Seas with Our Luxury Yacht Rentals
                </h1>
                <p className="hero-text">
                    Experience the freedom and luxury of yachting on the open seas. Choose
                    from our top-of-the-line yachts and embark on an unforgettable journey
                    surrounded by breathtaking views and state-of-the-art amenities.
                </p>
                <button className="hero-button">
                    <a href="#rental">Yacht rental</a>
                </button>
            </div>
        </section>
    )
};

export default Hero;