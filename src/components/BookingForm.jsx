import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [tripType, setTripType] = useState('single'); // 'single' or 'round'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup && dropoff) {
      // Dynamic pricing logic based on address
      const seed = (pickup + dropoff).length;
      const basePrice = 55;
      const variablePrice = (seed % 6); // 0 to 5
      const finalPrice = basePrice + variablePrice;

      const price = tripType === 'single' ? finalPrice.toFixed(2) : (finalPrice * 2).toFixed(2);
      onBook({ pickup, dropoff, tripType, price });
    }
  };

  // Helper to preview price (optional, but good for UX)
  const getEstimatedPrice = () => {
    if (!pickup || !dropoff) return '0.00';
    const seed = (pickup + dropoff).length;
    const finalPrice = 55 + (seed % 6);
    return tripType === 'single' ? finalPrice.toFixed(2) : (finalPrice * 2).toFixed(2);
  };

  return (
    <div className="card">
      <h2 className="title">Book a Ride</h2>

      <div className="trip-type-toggle">
        <button
          className={`toggle-btn ${tripType === 'single' ? 'active' : ''}`}
          onClick={() => setTripType('single')}
          type="button"
        >
          Single Trip
        </button>
        <button
          className={`toggle-btn ${tripType === 'round' ? 'active' : ''}`}
          onClick={() => setTripType('round')}
          type="button"
        >
          Round Trip
        </button>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="pickup">Pickup Location</label>
          <input
            id="pickup"
            type="text"
            placeholder="Enter pickup address"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropoff">Destination</label>
          <input
            id="dropoff"
            type="text"
            placeholder="Enter dropoff destination"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            required
          />
        </div>

        {/* Fixed Price Display */}
        {pickup && dropoff && (
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: '5px' }}>Total Fare</p>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-color)' }}>
              ${getEstimatedPrice()}
            </div>
          </div>
        )}

        <button type="submit" className="btn-primary full-width">
          Confirm Pickup
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
