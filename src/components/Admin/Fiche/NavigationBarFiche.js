// src/components/Fiche/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBarFiche = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Medical Fiche Management
                </Typography>
                <Button color="inherit" component={Link} to="/admin">Home</Button>
                <Button color="inherit" component={Link} to="/admin/medical-records">Records</Button>
                <Button color="inherit" component={Link} to="/admin/add-record">Add Record</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBarFiche;
