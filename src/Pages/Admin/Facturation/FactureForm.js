import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const FactureForm = ({ initialData = {}, onSubmit }) => {
  const [factureData, setFactureData] = useState({
    patientId: '',
    services: '',
    statut: '',
    dateEmission: '',
    ...initialData, // Spread in any initial data if provided
  });

  useEffect(() => {
    if (initialData.id) {
      // Fetch data if there's an ID in initialData (edit scenario)
      axios.get(`http://localhost:8090/factures/${initialData.id}`)
        .then((response) => setFactureData(response.data))
        .catch((error) => console.error('Error fetching facture data:', error));
    }
  }, [initialData.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFactureData({
      ...factureData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialData.id) {
      // Update an existing facture
      await axios.put(`http://localhost:8090/factures/${initialData.id}`, factureData);
    } else {
      // Create a new facture
      await axios.post('http://localhost:8090/factures', factureData);
    }
    console.log('Facture data submitted:', factureData);
    if (onSubmit) onSubmit(factureData); // Call onSubmit callback if provided
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        {initialData.id ? 'Edit Facture' : 'Add New Facture'}
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
          {initialData.id ? 'Update Facture' : 'Add Facture'}
        </Button>
      </form>
    </Container>
  );
};

export default FactureForm;
