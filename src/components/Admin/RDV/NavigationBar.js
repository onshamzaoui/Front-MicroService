// src/components/RDV/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBarRDV = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    RDV Management
                </Typography>
                <Button color="inherit" component={Link} to="/admin">Home</Button>
                <Button color="inherit" component={Link} to="/admin/appointments">RDV List</Button>
                <Button color="inherit" component={Link} to="/admin/add-appointment">Add RDV</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBarRDV;
