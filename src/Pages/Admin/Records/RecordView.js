// src/pages/RecordView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecordView = () => {
    const { id } = useParams();
    const [record, setRecord] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/medicalRecords/${id}`);
                setRecord(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching record details');
                setLoading(false);
            }
        };

        fetchRecord();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Medical Record Details</h2>
            <p><strong>Patient ID:</strong> {record.patientId}</p>
            <p><strong>Doctor ID:</strong> {record.doctorId}</p>
            <p><strong>Date:</strong> {record.date}</p>
            <p><strong>Description:</strong> {record.description}</p>
            <p><strong>Treatment Description:</strong> {record.treatmentDescription}</p>
            <p><strong>Prescription:</strong> {record.prescription}</p>
            <p><strong>Notes:</strong> {record.notes}</p>
        </div>
    );
};

export default RecordView;
