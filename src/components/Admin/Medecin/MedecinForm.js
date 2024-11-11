import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8090/medecins/${id}`)
                .then((response) => setMedecinData(response.data))
                .catch((error) => setError('Error fetching medecin data.'));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedecinData({ ...medecinData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            if (id) {
                await axios.put(`http://localhost:8090/medecins/${id}`, medecinData);
            } else {
                await axios.post('http://localhost:8090/medecins', medecinData);
            }
            navigate('/medecins');
        } catch (error) {
            setError('Error saving medecin data.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                {id ? 'Edit Medecin' : 'Add Medecin'}
            </Typography>
            {error && (
                <Typography color="error" variant="body2">
                    {error}
                </Typography>
            )}
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : id ? 'Update' : 'Add'}
                </Button>
            </form>
        </Container>
    );
};

export default MedecinForm;
