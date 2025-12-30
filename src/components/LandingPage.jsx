import React from 'react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-page">
            <div className="hero-content">
                <h1 className="hero-title">Ride in Style</h1>
                <p className="hero-subtitle">Premium rides. Fixed rates. unmatched comfort.</p>
                <button onClick={onStart} className="btn-primary hero-btn">
                    Book Now
                </button>
            </div>

            <div className="features-grid">
                <div className="feature-item">
                    <h3>Fixed Pricing</h3>
                    <p>No surprises. $80 Single / $160 Round Trip.</p>
                </div>
                <div className="feature-item">
                    <h3>Secure Payment</h3>
                    <p>Easy and secure BTC transactions.</p>
                </div>
                <div className="feature-item">
                    <h3>Instant Booking</h3>
                    <p>Get a driver in seconds.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
