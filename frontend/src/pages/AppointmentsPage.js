import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [appointmentsRes, barbersRes] = await Promise.all([
        axios.get('http://localhost:5000/api/appointments'),
        axios.get('http://localhost:5000/api/barbers')
      ]);
      setAppointments(appointmentsRes.data);
      setBarbers(barbersRes.data);
    };
    fetchData();
  }, []);

  const getBarberName = (id) => {
    const barber = barbers.find(b => b.id === id);
    return barber ? barber.name : 'Unknown';
  };

  return (
    <div>
      <h2>Lista e Rezervimeve</h2>
      {appointments.length === 0 ? (
        <p>Nuk ka rezervime.</p>
      ) : (
        <ul>
          {appointments.map(appt => (
            <li key={appt.id}>
              <strong>{getBarberName(appt.barber_id)}</strong> – {appt.date.split('T')[0]} në {appt.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentsPage;
