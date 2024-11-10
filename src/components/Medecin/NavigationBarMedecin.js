// src/components/Medecin/NavigationBarMedecin.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBarMedecin = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Medecin Management
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/medecins">Medecins</Button>
                <Button color="inherit" component={Link} to="/medecins/add">Add Medecin</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBarMedecin;
