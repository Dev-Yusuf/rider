import React from 'react';

const SuccessView = ({ onReset, bookingCode }) => {
    return (
        <div className="card success-view">
            <div className="success-icon">✓</div>
            <h2 className="title">Booking Confirmed!</h2>
            <p className="description">
                Your driver is on the way.
            </p>

            {bookingCode && (
                <div style={{ background: '#FFF3CD', color: '#856404', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #FFEEBA' }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Your Booking Code</p>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px' }}>{bookingCode}</div>
                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Please keep this code safe.</p>
                </div>
            )}

            <button onClick={onReset} className="btn-primary full-width">
                Book Another Ride
            </button>
        </div>
    );
};

export default SuccessView;
