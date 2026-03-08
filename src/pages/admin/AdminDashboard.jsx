import React from 'react';
import StatCard from '../../components/admin/StatCard.jsx';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const stats = [
        { title: 'Total Inventory', value: '42', icon: '🚗', color: 'blue' },
        { title: 'Pending Items', value: '12', icon: '⏳', color: 'orange' },
        { title: 'Total Sales', value: '$1.2M', icon: '💰', color: 'green' },
        { title: 'System Alerts', value: '2', icon: '🔔', color: 'red' },
    ];

    return (
        <div className="admin-dashboard">
            <h1 className="page-title">Dashboard <span>Overview</span></h1>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="dashboard-sections">
                <section className="recent-activity card">
                    <div className="card-header">
                        <h3>Recent Items</h3>
                        <button className="btn-text">View All</button>
                    </div>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="item-thumb">🏎️</div>
                            <div className="item-info">
                                <strong>2023 Audi RS7 Sportback</strong>
                                <span>Added 2 hours ago</span>
                            </div>
                            <div className="item-status success">Active</div>
                        </div>
                        <div className="activity-item">
                            <div className="item-thumb">🚙</div>
                            <div className="item-info">
                                <strong>2022 Mercedes G63 AMG</strong>
                                <span>Updated 5 hours ago</span>
                            </div>
                            <div className="item-status success">Active</div>
                        </div>
                        <div className="activity-item">
                            <div className="item-thumb">🏠</div>
                            <div className="item-info">
                                <strong>2021 BMW 8 Series</strong>
                                <span>Modified yesterday</span>
                            </div>
                            <div className="item-status warning">Pending</div>
                        </div>
                    </div>
                </section>

                <section className="quick-stats card">
                    <div className="card-header">
                        <h3>Inventory Distribution</h3>
                    </div>
                    <div className="dist-list">
                        <div className="dist-item">
                            <span>Sedans</span>
                            <div className="progress-bar"><div className="progress" style={{ width: '45%' }}></div></div>
                            <span>45%</span>
                        </div>
                        <div className="dist-item">
                            <span>SUVs</span>
                            <div className="progress-bar"><div className="progress" style={{ width: '30%' }}></div></div>
                            <span>30%</span>
                        </div>
                        <div className="dist-item">
                            <span>Sports Cars</span>
                            <div className="progress-bar"><div className="progress" style={{ width: '25%' }}></div></div>
                            <span>25%</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
