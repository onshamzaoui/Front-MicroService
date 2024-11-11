// src/components/Medecin/MedecinForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

const MedecinForm = () => {
    const { id } = useParams(); // If editing, id will be available
    const navigate = useNavigate();
    const [medecinData, setMedecinData] = useState({
        firstName: '',
        lastName: '',
        specialty: '',
        licenseNumber: '',
        experienceYears: '',
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/v1/medecins/${id}`)
                .then((response) => setMedecinData(response.data))
                .catch((error) => console.error('Error fetching medecin:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedecinData({ ...medecinData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await axios.put(`http://localhost:8080/v1/medecins/${id}`, medecinData);
        } else {
            await axios.post('http://localhost:8080/v1/medecins', medecinData);
        }
        navigate('/medecins');
    };

    return (
        <Container maxWidth="sm">
            <h2>{id ? 'Edit Medecin' : 'Add Medecin'}</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={medecinData.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={medecinData.lastName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Specialty"
                    name="specialty"
                    value={medecinData.specialty}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="License Number"
                    name="licenseNumber"
                    value={medecinData.licenseNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Experience Years"
                    name="experienceYears"
                    type="number"
                    value={medecinData.experienceYears}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {id ? 'Update' : 'Add'}
                </Button>
            </form>
        </Container>
    );
};

export default MedecinForm;
