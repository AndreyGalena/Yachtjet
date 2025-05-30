import React from 'react';
import './ourTruck.scss';

const OurTruck = () => {
    return (
        <section className="section our-yachts-section" id="yahts">
            <div className="container our-yachts-container">
                <h2 className="our-yacht-title">
                    Choose your dream yacht and sail away into the sunset
                </h2>
                <input type="radio" name="slider" id="slide1" checked />
                <input type="radio" name="slider" id="slide2" />
                <input type="radio" name="slider" id="slide3" />

                <ul className="our-yachts-list">
                    <li className="our-yachts-item arrow">
                        <div className="our-yachts-picture-container">
                            <picture className="our-yachts-picture">
                                <source srcset="/img/our-yachts/arrow-pc2k.jpg     1x,
                                                /img/our-yachts/arrow-pc2k-@2x.jpg 2x"
                                    media="(min-width: 1440px)" />
                                <img src="/img/our-yachts/arrow-mobile.jpg" alt="arrow" width="360" height="268" />
                            </picture>
                        </div>
                        <div className="our-yacht-text-container">
                            <div className="our-yacht-topic-container">
                                <h3 className="our-yacht-subtitle">Arrow</h3>
                                <p className="our-yacht-topic">LUXURY YAHTS</p>
                            </div>
                            <div className="our-yacht-options">
                                <ul className="our-yacht-features">
                                    <li>LENGTH</li>
                                    <li>BUILDER</li>
                                    <li>BUILT</li>
                                    <li>GUESTS</li>
                                    <li>PRICE</li>
                                </ul>
                                <ul className="our-yacht-specific">
                                    <li>48m(155ft)</li>
                                    <li>Admiral</li>
                                    <li>2021</li>
                                    <li>11 in 5 cabins</li>
                                    <li>€33,500,000</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="our-yachts-item benetti">
                        <div className="our-yachts-picture-container">
                            <picture className="our-yachts-picture">
                                <source srcset="
                /img/our-yachts/benetti-pc2k.jpg     1x,
                /img/our-yachts/benetti-pc2k-@2x.jpg 2x
              " media="(min-width: 1440px)" />

                                <source srcset="
                /img/our-yachts/benetti-pc.jpg     1x,
                /img/our-yachts/benetti-pc-@2x.jpg 2x
              " media="(min-width: 1280px)" />
                                <source srcset="
                /img/our-yachts/benetti-tablet.jpg     1x,
                /img/our-yachts/benetti-tablet-@2x.jpg 2x
              " media="(min-width: 768px)" />
                                <source srcset="
                /img/our-yachts/benetti-mobile.jpg     1x,
                /img/our-yachts/benetti-mobile-@2x.jpg 2x
              " media="(max-width: 767px)" />
                                <img src="/img/our-yachts/benetti-mobile.jpg" alt="benetti " width="360" height="268" />
                            </picture>
                        </div>
                        <div className="our-yacht-text-container">
                            <div className="our-yacht-topic-container">
                                <h3 className="our-yacht-subtitle">BENETTI OASIS 40M BO122</h3>
                                <p className="our-yacht-topic">LUXURY YAHTS</p>
                            </div>
                            <div className="our-yacht-options">
                                <ul className="our-yacht-features">
                                    <li>LENGTH</li>
                                    <li>BUILDER</li>
                                    <li>BUILT</li>
                                    <li>GUESTS</li>
                                    <li>PRICE</li>
                                </ul>
                                <ul className="our-yacht-specific">
                                    <li>41m (133ft)</li>
                                    <li>Benetti</li>
                                    <li>2025</li>
                                    <li>10 in 5 cabins</li>
                                    <li>€23,210,000</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="our-yachts-item belle">
                        <div className="our-yachts-picture-container">
                            <picture className="our-yachts-picture">
                                <source srcset="
                /img/our-yachts/belle-pc2k.jpg     1x,
                /img/our-yachts/belle-pc2k-@2x.jpg 2x
              " media="(min-width: 1440px)" />

                                <source srcset="
                /img/our-yachts/belle-pc.jpg     1x,
                /img/our-yachts/belle-pc-@2x.jpg 2x
              " media="(min-width: 1280px)" />
                                <source srcset="
                /img/our-yachts/belle-tablet.jpg     1x,
                /img/our-yachts/belle-tablet-@2x.jpg 2x
              " media="(min-width: 768px)" />
                                <source srcset="
                /img/our-yachts/belle-mobile.jpg     1x,
                /img/our-yachts/belle-mobile-@2x.jpg 2x
              " media="(max-width: 767px)" />
                                <img src="/img/our-yachts/belle-mobile.jpg" alt="Belle ANNA" width="360" height="268" />
                            </picture>
                        </div>
                        <div className="our-yacht-text-container">
                            <div className="our-yacht-topic-container">
                                <h3 className="our-yacht-subtitle">BELLE ANNA</h3>
                                <p className="our-yacht-topic">LUXURY YAHTS</p>
                            </div>
                            <div className="our-yacht-options">
                                <ul className="our-yacht-features">
                                    <li>LENGTH</li>
                                    <li>BUILDER</li>
                                    <li>BUILT</li>
                                    <li>GUESTS</li>
                                    <li>PRICE</li>
                                </ul>
                                <ul className="our-yacht-specific">
                                    <li>50m(155ft)</li>
                                    <li>ISA</li>
                                    <li>2012</li>
                                    <li>12 in 6 cabins</li>
                                    <li>€21,000,000</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="slider-nav">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                </div>
                <a className="our-yachts-button" href="#rental">Yacht rental</a>
            </div>
        </section>
    )
}

export default OurTruck;