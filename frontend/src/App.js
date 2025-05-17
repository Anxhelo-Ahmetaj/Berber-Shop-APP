import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import AppointmentsPage from './pages/AppointmentsPage';

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>💈 Barber Shop</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>Rezervo</Link>
          <Link to="/appointments">Shiko Rezervimet</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BookingPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
