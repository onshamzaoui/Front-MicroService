import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const PaiementList = () => {
  const [paiements, setPaiements] = useState([]);

  useEffect(() => {
    // Fetch paiements data from backend API
    axios.get('http://localhost:8090/paiements') 
      .then((response) => setPaiements(response.data))
      .catch((error) => console.error('Error fetching paiements:', error));
  }, []);

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Facture ID</TableCell>
            <TableCell>Montant</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paiements.map((paiement) => (
            <TableRow key={paiement.id}>
              <TableCell>{paiement.factureId}</TableCell>
              <TableCell>{paiement.montant}</TableCell>
              <TableCell>{new Date(paiement.date).toLocaleDateString()}</TableCell>
              <TableCell>{paiement.mode}</TableCell>
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

export default PaiementList;
