import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1>About <span>MGD Autodealer</span></h1>
                    <p>Redefining the car buying experience with trust, quality, and luxury.</p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Our <span>Mission</span></h2>
                            <p>
                                At MGD Autodealer, our mission is to provide an elite selection of vehicles for
                                discerning drivers. We believe that buying a car should be more than just a
                                transaction—it should be an experience marked by transparency and excellence.
                            </p>
                            <ul>
                                <li>✨ Hand-picked luxury inventory</li>
                                <li>🛡️ Comprehensive 150-point inspection</li>
                                <li>💎 Personalized concierge service</li>
                                <li>💰 Competitive financing rates</li>
                            </ul>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80" alt="Our Showroom" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <h2 className="text-center">Meet Our <span>Team</span></h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://i.pravatar.cc/150?u=1" alt="CEO" />
                            <h3>James Wilson</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="https://i.pravatar.cc/150?u=2" alt="Sales" />
                            <h3>Sarah Chen</h3>
                            <p>Head of Sales</p>
                        </div>
                        <div className="team-member">
                            <img src="https://i.pravatar.cc/150?u=3" alt="Finance" />
                            <h3>Michael Ross</h3>
                            <p>Finance Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
