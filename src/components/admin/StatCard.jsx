import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className={`stat-card ${color}`}>
            <div className="stat-content">
                <span className="stat-label">{title}</span>
                <h3 className="stat-value">{value}</h3>
            </div>
            <div className="stat-icon">
                {icon}
            </div>
        </div>
    );
};

export default StatCard;
