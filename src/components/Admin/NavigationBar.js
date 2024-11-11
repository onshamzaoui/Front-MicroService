import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    HealthApp Management
                </Typography>
                <Button color="inherit" component={Link} to="/admin">Home</Button>
                <Button color="inherit" component={Link} to="/admin/medecins">Medecins</Button>
                <Button color="inherit" component={Link} to="/admin/appointments">Appointments</Button>
                <Button color="inherit" component={Link} to="/admin/RDV">RDV</Button>
                <Button color="inherit" component={Link} to="/admin/facturation/factures">Appointments</Button>
                <Button color="inherit" component={Link} to="/admin/patients">Patients</Button>
                <Button color="inherit" component={Link} to="/admin/record">Records</Button>




            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
