// src/components/RecordList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const RecordList = ({ records }) => {
    return (
        <TableContainer component={Paper}>
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
                                <Link to={`/records/${record.recordId}`}>View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RecordList;
