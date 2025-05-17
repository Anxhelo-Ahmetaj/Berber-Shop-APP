import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingPage() {
  const [barbers, setBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/barbers')
      .then(res => setBarbers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBooking = async () => {
    try {
      await axios.post('http://localhost:5000/api/appointments', {
        user_id: 1,
        barber_id: selectedBarber,
        date,
        time
      });
      setMessage('✅ Rezervimi u krye me sukses!');
    } catch (err) {
      setMessage(err.response?.data?.error || '❌ Gabim gjatë rezervimit.');
    }
  };

  return (
    <div>
      <h2>Rezervo një orar</h2>

      <select value={selectedBarber} onChange={e => setSelectedBarber(e.target.value)}>
        <option value="">-- Zgjidh berberin --</option>
        {barbers.map(b => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>

      <div style={{ marginTop: 10 }}>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} style={{ marginLeft: 10 }} />
        <button onClick={handleBooking} style={{ marginLeft: 10 }}>Rezervo</button>
      </div>

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
}

export default BookingPage;
