// src/pages/MedicalRecords.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const MedicalRecords = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        // Fetch records from the API
        axios.get('http://localhost:8090/medicalRecords')
            .then((response) => setRecords(response.data))
            .catch((error) => console.error('Error fetching records:', error));
    }, []);

    return (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Patient ID</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Doctor ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {records.map((record) => (
                        <TableRow key={record.recordId}>
                            <TableCell>{record.patientId}</TableCell>
                            <TableCell>{record.description}</TableCell>
                            <TableCell>{record.doctorId}</TableCell>
                            <TableCell>{record.date}</TableCell>
                            <TableCell>
                                <Link to={`/medical-records/${record.recordId}`}>View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MedicalRecords;
