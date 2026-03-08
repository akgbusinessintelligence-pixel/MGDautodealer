import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () => {
    const location = useLocation();

    const navItems = [
        { label: 'Dashboard', path: '/admin', icon: '📊' },
        { label: 'Inventory', path: '/admin/items', icon: '🚗' },
        { label: 'Categories', path: '/admin/categories', icon: '📂' },
        { label: 'Makes', path: '/admin/makes', icon: '🏷️' },
        { label: 'Models', path: '/admin/models', icon: '📑' },
        { label: 'Sliders', path: '/admin/slider', icon: '🖼️' },
        { label: 'System', path: '/admin/configuration', icon: '⚙️' },
    ];

    return (
        <nav className="admin-nav">
            <div className="admin-logo">
                <Link to="/admin">Admin<span>Panel</span></Link>
            </div>
            <ul className="admin-menu">
                {navItems.map((item) => (
                    <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                        <Link to={item.path}>
                            <span className="icon">{item.icon}</span>
                            <span className="label">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="admin-nav-footer">
                <Link to="/" className="back-to-site">← Back to Website</Link>
            </div>
        </nav>
    );
};

export default AdminNav;
