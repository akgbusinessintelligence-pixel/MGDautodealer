import React, { useState, useEffect } from 'react';
import ListingCard from '../components/listings/ListingCard.jsx';
import { fetchListings } from '../services/api';
import './Listings.css';

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [filters, setFilters] = useState({
        make: '',
        bodyType: '',
        priceMax: ''
    });

    useEffect(() => {
        fetchListings().then(data => {
            setListings(data);
        }).catch(err => console.error(err));
    }, []);

    const filteredListings = listings.filter(listing => {
        return (
            (filters.make === '' || listing.title.toLowerCase().includes(filters.make.toLowerCase())) &&
            (filters.bodyType === '' || listing.bodyType === filters.bodyType) &&
            (filters.priceMax === '' || listing.price <= parseInt(filters.priceMax))
        );
    });

    return (
        <div className="listings-page">
            <div className="container">
                <div className="listings-layout">
                    <aside className="filters-sidebar">
                        <h3>Filter Results</h3>
                        <div className="filter-group">
                            <label>Search Keyword</label>
                            <input
                                type="text"
                                placeholder="e.g. BMW, Audi..."
                                onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                            />
                        </div>
                        <div className="filter-group">
                            <label>Body Type</label>
                            <select onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}>
                                <option value="">All Types</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Coupe">Coupe</option>
                                <option value="SUV">SUV</option>
                                <option value="Sports Car">Sports Car</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Max Price ($)</label>
                            <input
                                type="number"
                                placeholder="150000"
                                onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                            />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                            Apply Filters
                        </button>
                    </aside>

                    <section className="listings-content">
                        <div className="results-info">
                            <p>Showing <strong>{filteredListings.length}</strong> vehicles</p>
                            <div className="sort-options">
                                <span>Sort by:</span>
                                <select>
                                    <option>Newest First</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="listings-grid">
                            {filteredListings.map(listing => (
                                <ListingCard key={listing.id} listing={listing} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Listings;
