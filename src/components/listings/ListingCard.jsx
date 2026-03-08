import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';

const ListingCard = ({ listing }) => {
    return (
        <div className="listing-card">
            <div className="card-image">
                <img src={listing.image} alt={listing.title} />
                <span className="price-tag">${listing.price.toLocaleString()}</span>
            </div>
            <div className="card-content">
                <h3 className="card-title">
                    <Link to={`/listing/${listing.id}`}>{listing.title}</Link>
                </h3>
                <div className="card-specs">
                    <span>📅 {listing.year}</span>
                    <span>⛽ {listing.fuelType}</span>
                    <span>🚙 {listing.bodyType}</span>
                </div>
                <div className="card-meta">
                    <span>📍 {listing.mileage}</span>
                    <span>⚙️ {listing.gearbox}</span>
                </div>
                <Link to={`/listing/${listing.id}`} className="btn btn-outline">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ListingCard;
