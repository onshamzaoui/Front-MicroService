// src/pages/RecordView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecordView = () => {
    const { id } = useParams();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        // Fetch the record details from the API
        axios.get(`http://localhost:8080/api/medicalRecords/${id}`)
            .then((response) => setRecord(response.data))
            .catch((error) => console.error('Error fetching record details:', error));
    }, [id]);

    if (!record) {
        return <div>Loading...</div>;
    }

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
