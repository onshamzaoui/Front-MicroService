// src/components/Patient/NavigationBarPatient.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBarPatient = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Patient Management
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/patients">
                    Patients
                </Button>
                <Button color="inherit" component={Link} to="/patients/add">
                    Add Patient
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBarPatient;
