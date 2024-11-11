// src/pages/AppointmentView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AppointmentView = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8090/rdv/${id}`)
            .then((response) => setAppointment(response.data))
            .catch((error) => console.error('Error fetching appointment details:', error));
    }, [id]);

    if (!appointment) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Appointment Details</h2>
            <p><strong>Patient ID:</strong> {appointment.patientId}</p>
            <p><strong>Doctor ID:</strong> {appointment.medId}</p>
            <p><strong>Date:</strong> {appointment.dateRDV}</p>
            <p><strong>Time:</strong> {appointment.heureRDV}</p>
            <p><strong>Status:</strong> {appointment.status}</p>
        </div>
    );
};

export default AppointmentView;
