import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-header">
                <div className="container">
                    <h1>Contact <span>Us</span></h1>
                    <p>Have questions? Reach out to our specialist team.</p>
                </div>
            </section>

            <div className="container">
                <div className="contact-layout">
                    <div className="contact-form-container">
                        <h2>Send a <span>Message</span></h2>
                        <form className="main-contact-form">
                            <div className="form-row">
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name" required />
                            </div>
                            <input type="email" placeholder="Email Address" required />
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Your Message..." rows="6" required></textarea>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    <aside className="contact-sidebar">
                        <div className="contact-info-card">
                            <h3>Our Location</h3>
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <div>
                                    <strong>Address</strong>
                                    <p>1004 Chambers St, Trenton, NJ 08611</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="icon">📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>(609) 503-5685</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>support@mgdautodealer.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80" alt="Map Location" />
                            <div className="map-overlay">
                                <span>View on Maps</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Contact;
