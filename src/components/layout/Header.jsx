import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <div className="contact-info">
                            <span>📞 +1 416 123-4768</span>
                            <span>✉️ info@mgdautodealer.com</span>
                        </div>
                        <div className="auth-links">
                            <Link to="/login">Sign In</Link>
                            <span>|</span>
                            <Link to="/register">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-content">
                        <Link to="/" className="logo">
                            MGD<span>AUTODEALER</span>
                        </Link>
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/listings">Browse Inventory</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/faq">F.A.Q.</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                        <Link to="/listings" className="btn btn-primary">Search Now</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
