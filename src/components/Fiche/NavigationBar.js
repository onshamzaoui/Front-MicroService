// src/components/Fiche/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Medical Fiche Management
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/medical-records">Records</Button>
                <Button color="inherit" component={Link} to="/add-record">Add Record</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
