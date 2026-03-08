import React from 'react';
import './AdminCommonList.css';

const AdminCommonList = ({ type }) => {
    // Mock data for different types
    const mockData = {
        Categories: ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible'],
        Makes: ['BMW', 'Audi', 'Mercedes-Benz', 'Toyota', 'Honda'],
        Models: ['X5', 'RS7', 'G63', 'Camry', 'Civic'],
    };

    const items = mockData[type] || [];

    return (
        <div className="admin-common-list">
            <div className="admin-page-header">
                <h1 className="page-title">{type} <span>Management</span></h1>
                <button className="btn btn-primary">+ Add New {type}</button>
            </div>

            <div className="taxonomy-grid">
                {items.map((item, index) => (
                    <div key={index} className="taxonomy-card card">
                        <div className="tax-info">
                            <span className="tax-icon">📁</span>
                            <strong>{item}</strong>
                        </div>
                        <div className="tax-actions">
                            <button className="btn-icon edit">✏️</button>
                            <button className="btn-icon delete">🗑️</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminCommonList;
