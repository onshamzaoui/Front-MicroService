import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const PaiementForm = () => {
  const [paiementData, setPaiementData] = useState({
    factureId: '',
    montant: '',
    date: '',
    mode: '',
  });

  const handleChange = (e) => {
    setPaiementData({
      ...paiementData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log('Paiement data submitted:', paiementData);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Add New Paiement
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <TextField
          label="Facture ID"
          name="factureId"
          value={paiementData.factureId}
          onChange={handleChange}
          required
        />
        <TextField
          label="Montant"
          name="montant"
          type="number"
          value={paiementData.montant}
          onChange={handleChange}
          required
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={paiementData.date}
          onChange={handleChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Mode"
          name="mode"
          value={paiementData.mode}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Paiement
        </Button>
      </form>
    </Container>
  );
};

export default PaiementForm;
