// src/components/Medecin/AvailabilityForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AvailabilityForm = () => {
    const { medecinId } = useParams();
    const [availabilityData, setAvailabilityData] = useState({
        availableDate: '',
        timeSlots: [{ startTime: '', endTime: '' }],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAvailabilityData({ ...availabilityData, [name]: value });
    };

    const handleSlotChange = (index, e) => {
        const { name, value } = e.target;
        const newTimeSlots = [...availabilityData.timeSlots];
        newTimeSlots[index][name] = value;
        setAvailabilityData({ ...availabilityData, timeSlots: newTimeSlots });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/v1/availability/${medecinId}`, availabilityData);
        alert('Availability added!');
    };

    return (
        <Container maxWidth="sm">
            <h2>Add Availability</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Available Date"
                    name="availableDate"
                    type="date"
                    value={availabilityData.availableDate}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    required
                />
                {availabilityData.timeSlots.map((slot, index) => (
                    <div key={index}>
                        <TextField
                            label="Start Time"
                            name="startTime"
                            type="time"
                            value={slot.startTime}
                            onChange={(e) => handleSlotChange(index, e)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                        />
                        <TextField
                            label="End Time"
                            name="endTime"
                            type="time"
                            value={slot.endTime}
                            onChange={(e) => handleSlotChange(index, e)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                        />
                    </div>
                ))}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default AvailabilityForm;
