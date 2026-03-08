import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from '../components/listings/ListingCard.jsx';
import { fetchListings } from '../services/api';
import './Home.css';

const Home = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetchListings().then(data => {
            const featured = data.filter(item => item.featured == 1 || item.featured === true);
            setListings(featured.slice(0, 3));
        }).catch(err => console.error(err));
    }, []);

    return (
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Find Your <span>Dream Car</span> Today</h1>
                        <p>Exclusive deals on luxury, sports, and certified pre-owned vehicles.</p>
                        <div className="hero-search">
                            <input type="text" placeholder="Search by make, model, or year..." />
                            <button className="btn btn-primary">Find Car</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Best Car Deals of <span>The Month</span></h2>
                        <Link to="/listings" className="view-all">View All Inventory</Link>
                    </div>
                    <div className="listings-grid">
                        {listings.map(listing => (
                            <ListingCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="brands-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Most Popular <span>Brands</span></h2>
                    </div>
                    <div className="brands-grid">
                        {/* Simple brand placeholders */}
                        <div className="brand-item">BMW</div>
                        <div className="brand-item">Audi</div>
                        <div className="brand-item">Mercedes</div>
                        <div className="brand-item">Porsche</div>
                        <div className="brand-item">Bentley</div>
                        <div className="brand-item">Tesla</div>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <span className="icon">🏆</span>
                            <h3>Wide range of brands</h3>
                            <p>We offer a curated selection of the worlds finest automotive brands.</p>
                        </div>
                        <div className="feature-item">
                            <span className="icon">🛡️</span>
                            <h3>Trusted by our clients</h3>
                            <p>Thousands of satisfied customers trust us for their vehicle needs.</p>
                        </div>
                        <div className="feature-item">
                            <span className="icon">⚡</span>
                            <h3>Fast & easy financing</h3>
                            <p>Get approved quickly with our flexible financing options.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
