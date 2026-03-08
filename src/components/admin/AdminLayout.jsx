import React from 'react';
import AdminNav from './AdminNav.jsx';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">
            <AdminNav />
            <div className="admin-main">
                <header className="admin-header">
                    <div className="admin-breadcrumb">
                        Dashboard / <span>Overview</span>
                    </div>
                    <div className="admin-user-profile">
                        <span className="user-name">Welcome, Admin</span>
                        <div className="user-avatar">AD</div>
                    </div>
                </header>
                <div className="admin-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
