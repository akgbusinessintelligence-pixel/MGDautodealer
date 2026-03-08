import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link to="/" className="logo">
                            MGD<span>AUTODEALER</span>
                        </Link>
                        <p className="footer-desc">
                            Your premier destination for luxury and reliable used vehicles. We provide the best car deals with transparent financing and trusted service.
                        </p>
                        <div className="social-links">
                            {/* Add social icons here */}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/listings">Inventory</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/faq">Privacy Policy</Link></li>
                            <li><Link to="/faq">Terms & Conditions</Link></li>
                            <li><Link to="/faq">F.A.Q.</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Newsletter</h4>
                        <p>Subscribe to get the latest car deals and news.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your Email" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MGD Autodealer. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
