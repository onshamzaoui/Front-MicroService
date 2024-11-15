// src/Pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const Dashboard = () => {
    const buttonStyle = {
        margin: '10px 0', // Spacing between buttons
        width: '300px',   // Fixed width for all buttons
        fontSize: '16px', // Optional: make text size consistent
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Welcome to the Management System
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin/medical-records"
                style={buttonStyle}
            >
                Manage Medical Records
            </Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin/appointments"
                style={buttonStyle}
            >
                Manage Appointments (RDV)
            </Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin/medecins"
                style={buttonStyle}
            >
                Manage Medecins
            </Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin/patients"
                style={buttonStyle}
            >
                Manage Patients
            </Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin/facturation/factures"
                style={buttonStyle}
            >
                Manage Facturation
            </Button>
        </Container>
    );
};

export default Dashboard;
