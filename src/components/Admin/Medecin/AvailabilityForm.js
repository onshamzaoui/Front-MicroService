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

    // Fetch existing availability data if editing
    useEffect(() => {
        const fetchAvailabilityData = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/availability/${medecinId}`);
                if (response.data) {
                    setAvailabilityData(response.data);
                }
            } catch (error) {
                console.error('Error fetching availability:', error);
            }
        };

        if (medecinId) {
            fetchAvailabilityData();
        }
    }, [medecinId]);

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
        try {
            if (medecinId) {
                await axios.put(`http://localhost:8090/availability/${medecinId}`, availabilityData);
                alert('Availability updated!');
            } else {
                await axios.post(`http://localhost:8090/availability`, availabilityData);
                alert('Availability added!');
            }
        } catch (error) {
            console.error('Error saving availability:', error);
        }
    };

    const handleAddSlot = () => {
        setAvailabilityData({
            ...availabilityData,
            timeSlots: [...availabilityData.timeSlots, { startTime: '', endTime: '' }],
        });
    };

    return (
        <Container maxWidth="sm">
            <h2>{medecinId ? 'Edit Availability' : 'Add Availability'}</h2>
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
                <Button onClick={handleAddSlot} variant="outlined" color="secondary" fullWidth style={{ marginTop: '10px' }}>
                    Add Time Slot
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default AvailabilityForm;
