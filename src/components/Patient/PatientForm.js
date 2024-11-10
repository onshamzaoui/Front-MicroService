// src/components/Patient/PatientForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

const PatientForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        phoneNumber: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/patients/retrieve-patient/${id}`)
                .then((response) => setPatient(response.data))
                .catch((error) => console.error('Error fetching patient:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:8080/patients/modify-patient/${id}`, patient)
                .then(() => navigate('/patients'))
                .catch((error) => console.error('Error updating patient:', error));
        } else {
            axios.post('http://localhost:8080/patients/add-patient', patient)
                .then(() => navigate('/patients'))
                .catch((error) => console.error('Error adding patient:', error));
        }
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <TextField label="First Name" name="firstName" value={patient.firstName} onChange={handleChange} fullWidth margin="normal" required />
                <TextField label="Last Name" name="lastName" value={patient.lastName} onChange={handleChange} fullWidth margin="normal" required />
                <TextField label="Date of Birth" name="dateOfBirth" type="date" value={patient.dateOfBirth} onChange={handleChange} fullWidth margin="normal" required />
                <TextField label="Address" name="address" value={patient.address} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Phone Number" name="phoneNumber" value={patient.phoneNumber} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Email" name="email" value={patient.email} onChange={handleChange} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    {id ? 'Update Patient' : 'Add Patient'}
                </Button>
            </form>
        </Container>
    );
};

export default PatientForm;
