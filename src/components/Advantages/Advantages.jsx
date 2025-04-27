import React from 'react';
import './advantages.scss';

const Advantages = () => {
    return (
        <section className="section">
            <h2 className="visually-hidden">Advantages For The Best</h2>
            <div className="container advantages-container">
                <div className="activities-container">
                    <ol className="activities-list">
                        <li className="activity-item">
                            <div className="activity-top">
                            </div>
                            <p className="activity-description">
                                Swimming and water sports: try your hand at water skiing
                            </p>
                        </li>
                        <li className="activity-item">
                            <div className="activity-top">
                            </div>
                            <p className="activity-description">
                                Fishing: try to catch your own dinner
                            </p>
                        </li>
                        <li className="activity-item">
                            <div className="activity-top">
                            </div>
                            <p className="activity-description">
                                Sightseeing tours: take a shore or island tour, enjoy the views and
                                sunsets from the water
                            </p>
                        </li>

                        <li className="activity-item">
                            <div className="activity-top">
                            </div>
                            <p className="activity-description">
                                Rest and relaxation: read a book or listen to music while enjoying
                                the outdoor atmosphere.
                            </p>
                        </li>
                    </ol>
                </div>
                <picture className="image-container">
                    <source srcset="
          /img/advantages/adventages-pc2k.webp     1x,
          /img/advantages/adventages-pc2k-@2x.webp 2x
        " media="(min-width: 1440px)" />
                    <source srcset="
          /img/advantages/adventages-pc.webp     1x,
          /img/advantages/adventages-pc-@2x.webp 2x
        " media="(min-width: 1280px)" />
                    <source srcset="
          /img/advantages/adventages-tablet.webp     1x,
          /img/advantages/adventages-tablet-@2x.webp 2x
        " media="(min-width: 768px)" />
                    <source srcset="
          /img/advantages/adventages-mobile.webp     1x,
          /img/advantages/adventages-mobile-@2x.webp 2x
        " media="(max-width: 767px)" />
                    <img src="/img/advantages/adventages-mobile.webp" alt="Luxury yacht interior" width="704" height="424" />
                </picture>
            </div>
        </section>
    )
}

export default Advantages;