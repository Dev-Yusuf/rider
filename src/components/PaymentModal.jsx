import React, { useState } from 'react';

const PaymentModal = ({ onClose, onPaymentComplete, bookingDetails }) => {
    const btcAddress = "1BjzXaypGt9knasWRHLeJ5M7BLEGESHhvG"; // Mock address
    const [copied, setCopied] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(btcAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleConfirmPayment = () => {
        setIsVerifying(true);
        // Simulate verification delay
        setTimeout(() => {
            onPaymentComplete();
        }, 2000);
    };

    if (isVerifying) {
        return (
            <div className="modal-overlay">
                <div className="modal card" style={{ textAlign: 'center' }}>
                    <div style={{ margin: '2rem 0' }}>
                        <div className="loader" style={{ fontSize: '2rem' }}>Verifying...</div>
                    </div>
                    <p style={{ marginBottom: '1rem' }}>Confirming your transaction...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="modal card">
                <h2 className="title">Pay for your Ride</h2>

                {bookingDetails && (
                    <div style={{ marginBottom: '1.5rem', background: '#F9F9F9', padding: '1rem', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#666' }}>Amount</span>
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${bookingDetails.price || '0.00'}</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                            {bookingDetails.pickup} → {bookingDetails.dropoff}
                        </p>
                    </div>
                )}

                <p className="description">Please send BTC to the wallet address below to start your trip.</p>

                <div className="btc-address-container">
                    <label>BTC Wallet Address</label>
                    <div className="address-box">
                        <code>{btcAddress}</code>
                        <button onClick={handleCopy} className="btn-small" type="button">
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>

                <div className="modal-actions">
                    <button onClick={handleConfirmPayment} className="btn-primary full-width">
                        I Have Paid
                    </button>
                    <button onClick={onClose} className="btn-secondary full-width" style={{ marginTop: '10px' }}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
