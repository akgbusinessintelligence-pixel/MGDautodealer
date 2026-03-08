import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchListingById, updateListing, createListing } from '../../services/api';
import './AdminEditItem.css';

const AdminEditItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = id && id !== 'new';

    const [listing, setListing] = useState({
        title: '',
        price: '',
        year: new Date().getFullYear(),
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        mileage: '',
        gearbox: 'Automatic',
        doors: 4,
        topSpeed: '',
        engine: '',
        color: '',
        image: '',
        description: '',
        featured: false
    });

    const [loading, setLoading] = useState(isEdit);
    const [activeTab, setActiveTab] = useState('general');

    useEffect(() => {
        if (isEdit) {
            setLoading(true);
            fetchListingById(id).then(data => {
                setListing(data);
                setLoading(false);
            }).catch(err => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setListing(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = async () => {
        try {
            if (isEdit) {
                await updateListing(listing);
                alert('Vehicle updated successfully!');
            } else {
                await createListing(listing);
                alert('Vehicle created successfully!');
            }
            navigate('/admin/items');
        } catch (err) {
            alert('Error saving vehicle: ' + err.message);
        }
    };

    if (loading) return <div className="admin-edit-item">Loading vehicle data...</div>;

    const tabs = [
        { id: 'general', label: 'General Info' },
        { id: 'specs', label: 'Specifications' },
        { id: 'images', label: 'Images' },
    ];

    return (
        <div className="admin-edit-item">
            <div className="admin-page-header">
                <div className="header-text">
                    <button className="back-link" onClick={() => navigate('/admin/items')}>← Back to Inventory</button>
                    <h1 className="page-title">{isEdit ? 'Edit' : 'Add'} Vehicle: <span>{listing.title || 'New Listing'}</span></h1>
                </div>
                <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
            </div>

            <div className="edit-container card">
                <div className="edit-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    {activeTab === 'general' && (
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Listing Title</label>
                                <input name="title" type="text" value={listing.title} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Price ($)</label>
                                <input name="price" type="number" value={listing.price} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Featured Listing</label>
                                <input name="featured" type="checkbox" checked={listing.featured == 1 || listing.featured === true} onChange={handleChange} />
                            </div>
                            <div className="form-group full-width">
                                <label>Description</label>
                                <textarea name="description" rows="6" value={listing.description} onChange={handleChange}></textarea>
                            </div>
                        </div>
                    )}

                    {activeTab === 'specs' && (
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Make/Model</label>
                                <input name="title" type="text" value={listing.title} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Year</label>
                                <input name="year" type="number" value={listing.year} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Fuel Type</label>
                                <input name="fuelType" type="text" value={listing.fuelType} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Transmission</label>
                                <input name="gearbox" type="text" value={listing.gearbox} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Mileage</label>
                                <input name="mileage" type="text" value={listing.mileage} onChange={handleChange} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'images' && (
                        <div className="image-manager">
                            <div className="form-group full-width">
                                <label>Main Image URL</label>
                                <input name="image" type="text" value={listing.image} onChange={handleChange} placeholder="https://..." />
                            </div>
                            <div className="current-images">
                                {listing.image && (
                                    <div className="image-preview">
                                        <img src={listing.image} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminEditItem;
