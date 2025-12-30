import { useState } from 'react';
import BookingForm from './components/BookingForm';
import PaymentModal from './components/PaymentModal';
import SuccessView from './components/SuccessView';
import LandingPage from './components/LandingPage';
import DriverSelection from './components/DriverSelection';
import './index.css';

function App() {
  const [view, setView] = useState('landing'); // landing, booking, searching, driver-selection, payment, success
  const [bookingDetails, setBookingDetails] = useState(null);
  const [bookingCode, setBookingCode] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleStartBooking = () => {
    setView('booking');
  };

  const handleBook = (details) => {
    setBookingDetails(details);
    setView('searching');

    // Simulate finding a driver
    setTimeout(() => {
      setView('driver-selection');
    }, 3000);
  };

  const handleSelectDriver = (driver) => {
    setSelectedDriver(driver);
    setView('payment');
  };

  const handlePaymentComplete = () => {
    // Generate random booking code
    const code = 'RIDE-' + Math.random().toString(36).substr(2, 4).toUpperCase();
    setBookingCode(code);
    setView('success');
  };

  const handleClosePayment = () => {
    setView('booking');
  };

  const handleReset = () => {
    setBookingDetails(null);
    setBookingCode(null);
    setSelectedDriver(null);
    setView('landing');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Rider</h1>
      </header>

      <main className="main-content">
        {view === 'landing' && (
          <LandingPage onStart={handleStartBooking} />
        )}

        {view === 'booking' && (
          <BookingForm onBook={handleBook} />
        )}

        {view === 'searching' && (
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="loader" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Finding Drivers...</div>
            <p>Matching you with top-rated drivers nearby...</p>
          </div>
        )}

        {view === 'driver-selection' && (
          <DriverSelection onSelectDriver={handleSelectDriver} />
        )}

        {view === 'payment' && (
          <PaymentModal
            onClose={handleClosePayment}
            onPaymentComplete={handlePaymentComplete}
            bookingDetails={bookingDetails}
          />
        )}

        {view === 'success' && (
          <SuccessView onReset={handleReset} bookingCode={bookingCode} />
        )}
      </main>

      <footer className="app-footer">
        <p>Simple. Safe. Secure.</p>
      </footer>
    </div>
  );
}

export default App;
