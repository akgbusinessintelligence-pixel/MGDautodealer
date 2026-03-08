import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <h3>{question}</h3>
                <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How do I apply for financing?",
            answer: "You can apply for financing directly through our website by visiting the financing page or by contacting our sales department. We work with multiple lenders to provide the best rates available."
        },
        {
            question: "Can I trade in my old vehicle?",
            answer: "Yes, we accept trade-ins! Bring your vehicle to our showroom for a free appraisal, or use our online appraisal tool to get a preliminary estimate of its value."
        },
        {
            question: "Do you offer warranties on used cars?",
            answer: "Every certified pre-owned vehicle we sell comes with a 12-month / 20,000km limited warranty. We also offer extended warranty plans for additional peace of mind."
        },
        {
            question: "Is it possible to schedule a test drive online?",
            answer: "Absolutely. Simply go to the listing of the car you're interested in and use the 'Check Availability' or 'Contact' form to request a test drive at your preferred time."
        }
    ];

    return (
        <div className="faq-page">
            <section className="faq-header">
                <div className="container">
                    <h1>Frequently Asked <span>Questions</span></h1>
                    <p>Everything you need to know about buying from MGD Autodealer.</p>
                </div>
            </section>

            <div className="container">
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
