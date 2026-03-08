import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchListings, deleteListing } from '../../services/api';
import './AdminItems.css';

const AdminItems = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = () => {
        fetchListings().then(setListings).catch(console.error);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this listing?')) {
            deleteListing(id).then(() => {
                loadListings();
            }).catch(console.error);
        }
    };
    return (
        <div className="admin-items">
            <div className="admin-page-header">
                <h1 className="page-title">Inventory <span>Management</span></h1>
                <button className="btn btn-primary">+ Add New Item</button>
            </div>

            <div className="table-container card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Vehicle</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((item) => (
                            <tr key={item.id}>
                                <td>#{item.id}</td>
                                <td className="item-cell">
                                    <img src={item.image} alt="" className="table-thumb" />
                                    <span>{item.title}</span>
                                </td>
                                <td>{item.year}</td>
                                <td>${Number(item.price).toLocaleString()}</td>
                                <td><span className="badge">{item.fuelType}</span></td>
                                <td><span className="status-badge success">Active</span></td>
                                <td className="actions-cell">
                                    <Link to={`/admin/items/edit/${item.id}`} className="btn-icon edit">✏️</Link>
                                    <button className="btn-icon delete" onClick={() => handleDelete(item.id)}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminItems;
