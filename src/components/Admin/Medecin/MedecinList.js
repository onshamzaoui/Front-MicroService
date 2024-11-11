// src/components/Medecin/MedecinList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const MedecinList = () => {
    const [medecins, setMedecins] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/medecins')
            .then((response) => setMedecins(response.data))
            .catch((error) => console.error('Error fetching medecins:', error));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Specialty</TableCell>
                        <TableCell>Experience (Years)</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {medecins.map((medecin) => (
                        <TableRow key={medecin.id}>
                            <TableCell>{medecin.firstName}</TableCell>
                            <TableCell>{medecin.lastName}</TableCell>
                            <TableCell>{medecin.specialty}</TableCell>
                            <TableCell>{medecin.experienceYears}</TableCell>
                            <TableCell>
                                <Link to={`/medecins/${medecin.id}`}>View</Link>
                                <Link to={`/medecins/edit/${medecin.id}`} style={{ marginLeft: '10px' }}>Edit</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MedecinList;
