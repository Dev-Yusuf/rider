import React, { useState, useEffect } from 'react';

const DriverSelection = ({ onSelectDriver }) => {
    const [drivers, setDrivers] = useState([]);

    // Generate dynamic timing on component mount
    useEffect(() => {
        const generateDrivers = () => {
            const baseDrivers = [
                {
                    id: 1,
                    name: 'Sarah',
                    image: '/driver_sophia.png',
                    rating: 4.95,
                    trips: '2,400 trips',
                    car: 'Mercedes-Benz S-Class',
                    carColor: 'Black',
                    status: 'available'
                },
                {
                    id: 2,
                    name: 'Jessica',
                    image: 'https://randomuser.me/api/portraits/women/44.jpg',
                    rating: 4.98,
                    trips: '1,850 trips',
                    car: 'Audi A8',
                    carColor: 'Silver',
                    status: 'available'
                },
                {
                    id: 3,
                    name: 'Marcus',
                    image: 'https://randomuser.me/api/portraits/men/32.jpg',
                    rating: 4.93,
                    trips: '3,200 trips',
                    car: 'BMW 7 Series',
                    carColor: 'Black',
                    status: 'available'
                },
                {
                    id: 4,
                    name: 'Chloe',
                    image: 'https://randomuser.me/api/portraits/women/68.jpg',
                    rating: 4.90,
                    trips: '900 trips',
                    car: 'Lexus LS',
                    carColor: 'White',
                    status: 'available'
                },
                {
                    id: 5,
                    name: 'Daniel',
                    image: 'https://randomuser.me/api/portraits/men/45.jpg',
                    rating: 4.91,
                    trips: '1,600 trips',
                    car: 'Audi A6',
                    carColor: 'Gray',
                    status: 'available'
                },
                {
                    id: 6,
                    name: 'Michelle',
                    image: 'https://randomuser.me/api/portraits/women/33.jpg',
                    rating: 4.88,
                    trips: '3,100 trips',
                    car: 'Mercedes-Benz E-Class',
                    carColor: 'White',
                    status: 'busy'
                }
            ];

            // Add dynamic timing
            return baseDrivers.map(driver => {
                if (driver.status === 'available') {
                    const minutes = Math.floor(Math.random() * 7) + 2; // 2-8 mins
                    return { ...driver, time: `${minutes} mins away` };
                } else {
                    return { ...driver, time: 'Currently Busy' };
                }
            });
        };

        setDrivers(generateDrivers());
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'available': return '#10B981';
            case 'busy': return '#EF4444';
            default: return '#94A3B8';
        }
    };

    return (
        <div className="driver-selection-container">
            <div className="selection-header">
                <h2 className="selection-title">Select Your Chauffeur</h2>
                <p className="selection-description">Premium drivers matched to your preferences</p>
            </div>

            <div className="driver-grid">
                {drivers.map((driver) => (
                    <div
                        key={driver.id}
                        className={`driver-card-new ${driver.status === 'available' ? 'available' : 'unavailable'}`}
                    >
                        <div className="driver-card-header">
                            <img src={driver.image} alt={driver.name} className="driver-avatar" />
                            <div className="driver-badge">
                                <span className="badge-star">★</span>
                                <span className="badge-rating">{driver.rating}</span>
                            </div>
                        </div>

                        <div className="driver-card-body">
                            <h3 className="driver-name">{driver.name}</h3>
                            <p className="driver-experience">{driver.trips}</p>

                            <div className="driver-vehicle">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10.5L3.5 5.5H12.5L14 10.5M4 13H4.5M11.5 13H12" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3.5 10.5H12.5V12C12.5 12.2761 12.2761 12.5 12 12.5H4C3.72386 12.5 3.5 12.2761 3.5 12V10.5Z" stroke="#64748B" strokeWidth="1.5" />
                                </svg>
                                <div className="vehicle-info">
                                    <span className="vehicle-model">{driver.car}</span>
                                    <span className="vehicle-color">{driver.carColor}</span>
                                </div>
                            </div>

                            <div className="driver-eta">
                                <div className="eta-indicator" style={{ backgroundColor: getStatusColor(driver.status) }}></div>
                                <span className="eta-text" style={{ color: getStatusColor(driver.status) }}>
                                    {driver.time}
                                </span>
                            </div>
                        </div>

                        <button
                            className={`driver-select-btn ${driver.status === 'available' ? 'active' : 'disabled'}`}
                            onClick={() => driver.status === 'available' && onSelectDriver(driver)}
                            disabled={driver.status !== 'available'}
                        >
                            {driver.status === 'available' ? 'Select' : 'Unavailable'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DriverSelection;
