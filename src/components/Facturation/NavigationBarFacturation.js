import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBarFacturation = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Facturation Management
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>

        <Button color="inherit" component={Link} to="/facturation/factures">
          Factures
        </Button>
        <Button color="inherit" component={Link} to="/facturation/factures/add">
          Add Facture
        </Button>
        <Button color="inherit" component={Link} to="/facturation/paiements">
          Paiements
        </Button>
        <Button color="inherit" component={Link} to="/facturation/paiements/add">
          Add Paiement
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBarFacturation;
