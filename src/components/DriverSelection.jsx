import React from 'react';

const DriverSelection = ({ onSelectDriver }) => {
    const drivers = [
        {
            id: 1,
            name: 'David',
            image: '/driver_a.png',
            rating: 4.9,
            car: 'Toyota Camry (Black)',
            time: '3 mins away',
            status: 'available'
        },
        {
            id: 2,
            name: 'Emily',
            image: '/driver_b.png',
            rating: 4.95,
            car: 'Honda Accord (Silver)',
            time: 'Booked',
            status: 'booked'
        },
        {
            id: 3,
            name: 'Sophia',
            image: '/driver_sophia.png',
            rating: 4.98,
            car: 'Hyundai Sonata (White)',
            time: '4 mins away',
            status: 'available'
        }
    ];

    return (
        <div className="card">
            <h2 className="title">Select Your Driver</h2>
            <p className="description">We found 3 drivers near you.</p>

            <div className="driver-list">
                {drivers.map((driver) => (
                    <div key={driver.id} className="driver-card" style={{ opacity: driver.status === 'booked' ? 0.6 : 1 }}>
                        <img src={driver.image} alt={driver.name} className="driver-img" />
                        <div className="driver-info">
                            <div className="driver-name-row">
                                <h3>{driver.name}</h3>
                                <span className="driver-rating">★ {driver.rating}</span>
                            </div>
                            <p className="driver-car">{driver.car}</p>
                            <p className="driver-time" style={{ color: driver.status === 'booked' ? 'red' : 'var(--secondary-color)' }}>
                                {driver.time}
                            </p>
                            <button
                                className="btn-primary full-width"
                                style={{
                                    marginTop: '0.5rem',
                                    padding: '0.8rem',
                                    background: driver.status === 'booked' ? '#ccc' : 'var(--primary-color)',
                                    cursor: driver.status === 'booked' ? 'not-allowed' : 'pointer'
                                }}
                                onClick={() => driver.status !== 'booked' && onSelectDriver(driver)}
                                disabled={driver.status === 'booked'}
                            >
                                {driver.status === 'booked' ? 'Unavailable' : 'Select'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DriverSelection;
