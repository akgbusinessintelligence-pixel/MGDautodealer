import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchListingById } from '../services/api';
import './ListingDetail.css';

const ListingDetail = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchListingById(id).then(data => {
            setListing(data);
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="container" style={{ padding: '100px 0' }}>Loading vehicle details...</div>;
    if (!listing) return <div className="container">Listing not found</div>;

    return (
        <div className="listing-detail-page">
            <div className="page-header">
                <div className="container">
                    <div className="header-flex">
                        <div>
                            <div className="badges">
                                <span className="badge-item">{listing.year}</span>
                                <span className="badge-item">{listing.bodyType}</span>
                                <span className="badge-item">{listing.fuelType}</span>
                            </div>
                            <h1>{listing.title}</h1>
                        </div>
                        <div className="price-info">
                            <span className="price-label">Price</span>
                            <span className="price-value">${listing.price.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="detail-layout">
                    <div className="detail-main">
                        <div className="main-image">
                            <img src={listing.image} alt={listing.title} />
                        </div>

                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="label">Mileage</span>
                                <span className="value">{listing.mileage}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Transmission</span>
                                <span className="value">{listing.gearbox}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Engine</span>
                                <span className="value">{listing.engine}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Top Speed</span>
                                <span className="value">{listing.topSpeed}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Fuel Type</span>
                                <span className="value">{listing.fuelType}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Color</span>
                                <span className="value">{listing.color}</span>
                            </div>
                        </div>

                        <div className="description">
                            <h3>Vehicle Description</h3>
                            <p>
                                Experience unparalleled luxury and performance with this stunning {listing.title}.
                                This vehicle comes fully loaded with premium features and has been meticulously
                                maintained to provide an exceptional driving experience.
                            </p>
                            <p>
                                Whether you're commuting through the city or embarking on a long journey,
                                this car offers the perfect blend of comfort, style, and reliability.
                            </p>
                        </div>
                    </div>

                    <aside className="detail-sidebar">
                        <div className="seller-card">
                            <h3>Contact Seller</h3>
                            <div className="seller-info">
                                <strong>International Union Cars</strong>
                                <p>📍 1234 Caledon Road, Toronto</p>
                                <p>📩 sales@iucars.com</p>
                            </div>
                            <form className="contact-form">
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <textarea placeholder="I am interested in this vehicle..." rows="4"></textarea>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Send Message
                                </button>
                            </form>
                            <button className="btn btn-outline" style={{ width: '100%', marginTop: '10px' }}>
                                Call: +1 416 555-0199
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ListingDetail;
