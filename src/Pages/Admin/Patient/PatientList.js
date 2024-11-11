import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/patients/retrieve-all-patients')
            .then((response) => setPatients(response.data))
            .catch((error) => console.error('Error fetching patients:', error));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patients.map((patient) => (
                        <TableRow key={patient.id}>
                            <TableCell>{patient.firstName}</TableCell>
                            <TableCell>{patient.lastName}</TableCell>
                            <TableCell>{patient.dateOfBirth}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/patients/${patient.id}`}>View</Button>
                                <Button component={Link} to={`/patients/edit/${patient.id}`} style={{ marginLeft: '10px' }}>Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PatientList;
