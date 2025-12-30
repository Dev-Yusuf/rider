import React from 'react';

const DriverSelection = ({ onSelectDriver }) => {
    const drivers = [
        {
            id: 1,
            name: 'Michael',
            image: '/driver_a.png',
            rating: 4.9,
            car: 'Toyota Camry (Black)',
            time: '3 mins away'
        },
        {
            id: 2,
            name: 'Sarah',
            image: '/driver_b.png',
            rating: 4.95,
            car: 'Honda Accord (Silver)',
            time: '5 mins away'
        }
    ];

    return (
        <div className="card">
            <h2 className="title">Select Your Driver</h2>
            <p className="description">We found 2 drivers near you.</p>

            <div className="driver-list">
                {drivers.map((driver) => (
                    <div key={driver.id} className="driver-card">
                        <img src={driver.image} alt={driver.name} className="driver-img" />
                        <div className="driver-info">
                            <div className="driver-name-row">
                                <h3>{driver.name}</h3>
                                <span className="driver-rating">★ {driver.rating}</span>
                            </div>
                            <p className="driver-car">{driver.car}</p>
                            <p className="driver-time">{driver.time}</p>
                            <button
                                className="btn-primary full-width"
                                style={{ marginTop: '0.5rem', padding: '0.8rem' }}
                                onClick={() => onSelectDriver(driver)}
                            >
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DriverSelection;
