// src/pages/Appointments.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/rdv')
            .then((response) => setAppointments(response.data))
            .catch((error) => console.error('Error fetching appointments:', error));
    }, []);

    return (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Patient ID</TableCell>
                        <TableCell>Doctor ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow key={appointment.idRDV}>
                            <TableCell>{appointment.patientId}</TableCell>
                            <TableCell>{appointment.medId}</TableCell>
                            <TableCell>{appointment.dateRDV}</TableCell>
                            <TableCell>{appointment.heureRDV}</TableCell>
                            <TableCell>{appointment.status}</TableCell>
                            <TableCell>
                                <Link to={`/appointments/${appointment.idRDV}`}>View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Appointments;
