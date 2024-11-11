import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PaiementForm = () => {
  const { id } = useParams(); // Used to identify if we're editing an existing paiement
  const navigate = useNavigate();

  const [paiementData, setPaiementData] = useState({
    factureId: '',
    montant: '',
    date: '',
    mode: '',
  });

  useEffect(() => {
    // If there's an ID, fetch existing paiement data for editing
    if (id) {
      axios.get(`http://localhost:8090/paiements/${id}`)
        .then((response) => setPaiementData(response.data))
        .catch((error) => console.error('Error fetching paiement data:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaiementData({
      ...paiementData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing paiement
        await axios.put(`http://localhost:8090/paiements/${id}`, paiementData);
      } else {
        // Create new paiement
        await axios.post('http://localhost:8090/paiements', paiementData);
      }
      navigate('/paiements'); // Redirect after submit
    } catch (error) {
      console.error('Error submitting paiement data:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        {id ? 'Edit Paiement' : 'Add New Paiement'}
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
          {id ? 'Update Paiement' : 'Add Paiement'}
        </Button>
      </form>
    </Container>
  );
};

export default PaiementForm;
