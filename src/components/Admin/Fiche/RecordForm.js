// src/components/Fiche/RecordForm.js
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

const RecordForm = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        description: '',
        treatmentDescription: '',
        prescription: '',
        doctorId: '',
        date: '',
        notes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Remove or uncomment this line based on your requirements for submission
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <h2>Add New Medical Record</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Patient ID"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Treatment Description"
                    name="treatmentDescription"
                    value={formData.treatmentDescription}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Prescription"
                    name="prescription"
                    value={formData.prescription}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Doctor ID"
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <TextField
                    label="Notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default RecordForm;
