import React from 'react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-page-minimal">
            <div className="minimal-container">
                <div className="minimal-hero">
                    <h1 className="minimal-title">
                        Premium rides,<br />
                        delivered seamlessly
                    </h1>
                    <p className="minimal-subtitle">
                        Experience luxury travel without the hassle. Professional chauffeurs,
                        premium vehicles, and transparent pricing—all in one tap.
                    </p>
                    <div className="minimal-cta-group">
                        <button onClick={onStart} className="btn-primary-minimal">
                            Get OmniRide
                        </button>
                        <button className="btn-secondary-minimal">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
