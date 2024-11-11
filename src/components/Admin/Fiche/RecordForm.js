import React, { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecordForm = () => {
    const { id } = useParams(); // This assumes you're using react-router to get the record ID from the URL
    const [formData, setFormData] = useState({
        patientId: '',
        description: '',
        treatmentDescription: '',
        prescription: '',
        doctorId: '',
        date: '',
        notes: '',
    });

    // useEffect to fetch existing record data if `id` is present
    useEffect(() => {
        if (id) {
            // Fetch the record data from the API
            const fetchRecord = async () => {
                try {
                    const response = await axios.get(`http://localhost:8090/medicalRecords/${id}`);
                    setFormData(response.data);
                } catch (error) {
                    console.error('Error fetching record:', error);
                }
            };
            fetchRecord();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                // If `id` exists, update the existing record
                const response = await axios.put(`http://localhost:8090/medicalRecords/${id}`, formData);
                console.log('Record updated:', response.data);
            } else {
                // If `id` does not exist, create a new record
                const response = await axios.post('http://localhost:8090/medicalRecords', formData);
                console.log('Record created:', response.data);
            }
            // Optionally reset the form or show a success message
            setFormData({
                patientId: '',
                description: '',
                treatmentDescription: '',
                prescription: '',
                doctorId: '',
                date: '',
                notes: '',
            });
        } catch (error) {
            console.error('Error saving record:', error);
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <h2>{id ? 'Edit Medical Record' : 'Add New Medical Record'}</h2>
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
                    {id ? 'Update' : 'Submit'}
                </Button>
            </form>
        </Container>
    );
};

export default RecordForm;
