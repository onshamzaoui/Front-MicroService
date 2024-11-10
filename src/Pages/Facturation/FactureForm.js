import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const FactureForm = () => {
  const [factureData, setFactureData] = useState({
    patientId: '',
    services: '',
    statut: '',
    dateEmission: ''
  });

  const handleChange = (e) => {
    setFactureData({
      ...factureData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log('Facture data submitted:', factureData);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Add New Facture
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <TextField
          label="Patient ID"
          name="patientId"
          value={factureData.patientId}
          onChange={handleChange}
          required
        />
        <TextField
          label="Services"
          name="services"
          value={factureData.services}
          onChange={handleChange}
          required
          multiline
          rows={3}
        />
        <TextField
          label="Statut"
          name="statut"
          value={factureData.statut}
          onChange={handleChange}
          required
        />
        <TextField
          label="Date of Emission"
          name="dateEmission"
          type="date"
          value={factureData.dateEmission}
          onChange={handleChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Facture
        </Button>
      </form>
    </Container>
  );
};

export default FactureForm;
