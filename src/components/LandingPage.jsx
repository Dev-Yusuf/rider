import React from 'react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-page">
            <div className="landing-container">
                <div className="hero-content">
                    <div className="brand-badge">Premium Experience</div>
                    <h1 className="hero-title">
                        Your Journey,<br />
                        <span className="gradient-text">Elevated</span>
                    </h1>
                    <p className="hero-subtitle">
                        Experience luxury travel with OmniRide's elite chauffeur service.
                        Professional drivers, premium vehicles, transparent pricing.
                    </p>
                    <button onClick={onStart} className="btn-primary hero-btn">
                        <span>Get Started</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="feature-stats">
                        <div className="stat-item">
                            <div className="stat-number">4.9★</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">2-6 min</div>
                            <div className="stat-label">Avg. Wait Time</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">$45+</div>
                            <div className="stat-label">From</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
