import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const RDVForm = ({ initialData = {}, onSubmit }) => {
    const [formData, setFormData] = useState({
        patientId: '',
        medId: '',
        dateRDV: '',
        heureRDV: '',
        status: 'EN_ATTENTE',
        ...initialData // Allows formData to be initialized with initialData if provided
    });

    useEffect(() => {
        // Fetch data if an appointment ID is available in initialData
        if (initialData.id) {
            axios.get(`http://localhost:8090/appointments/${initialData.id}`)
                .then((response) => setFormData(response.data))
                .catch((error) => console.error('Error fetching appointment data:', error));
        }
    }, [initialData.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Calls the provided onSubmit handler with form data
    };

    return (
        <Container maxWidth="sm">
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
                    label="Doctor ID"
                    name="medId"
                    value={formData.medId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Date"
                    name="dateRDV"
                    type="date"
                    value={formData.dateRDV}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Time"
                    name="heureRDV"
                    type="time"
                    value={formData.heureRDV}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ shrink: true }}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <MenuItem value="EN_ATTENTE">En Attente</MenuItem>
                        <MenuItem value="CONFIRMER">Confirmer</MenuItem>
                        <MenuItem value="ANNULER">Annuler</MenuItem>
                        <MenuItem value="REFUSER">Refuser</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default RDVForm;
