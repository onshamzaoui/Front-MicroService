import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const FactureList = () => {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    // Fetch factures data from backend API
    axios.get('http://localhost:8090/factures') // Update this URL to match your backend route
      .then((response) => setFactures(response.data))
      .catch((error) => console.error('Error fetching factures:', error));
  }, []);

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Montant</TableCell>
            <TableCell>Services</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Date Emission</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {factures.map((facture) => (
            <TableRow key={facture.id}>
              <TableCell>{facture.patientId}</TableCell>
              <TableCell>{facture.montant}</TableCell>
              <TableCell>{facture.services.join(', ')}</TableCell>
              <TableCell>{facture.statut}</TableCell>
              <TableCell>{new Date(facture.dateEmission).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary">
                  View
                </Button>
                <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FactureList;
