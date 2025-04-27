import React from 'react';
import './aboutUs.scss?v=1.1';
// import { yachtjetpc2k } from '../../img/about-us';

const AboutUs = () => {
    return (
        <section className="section section-about-us">
            <div className="container about-us" id="about">
                <div className="about-content">
                    <h2 className="about-title">
                        YachtJet fleet is here to take you on the ultimate adventure
                    </h2>
                    <div className="container-about">
                        <p className="about-text">
                            From spacious decks to state-of-the-art technology, our yachts are
                            designed to provide the perfect blend of luxury and functionality.
                        </p>
                        <p className="about-text-two">
                            Take a look at our selection below and choose the yacht that matches
                            your needs and preferences.No matter which yacht you choose, our
                            experienced crew will ensure that your journey is smooth and
                            enjoyable. Book now and get ready for an unforgettable adventure on
                            the high seas.
                        </p>
                    </div>
                </div>
                <picture className="about-image">
                    <source srcSet={require('../../img/about-us/photoTruck_1277x577.jpg')}
                        media="(min-width: 1440px)" />
                    <img className="about-img" src={require('../../img/about-us/photoTruck.jpg')} alt="YachtJet fleet" />
                </picture>
            </div>
        </section>
    )
}

export default AboutUs;

