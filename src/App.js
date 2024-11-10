import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './components/Fiche/NavigationBar';
import NavigationBarRDV from './components/RDV/NavigationBar';
import NavigationBarMedecin from './components/Medecin/NavigationBarMedecin';
import NavigationBarPatient from './components/Patient/NavigationBarPatient';

import Home from './Pages/Home';

// Medical Records
import MedicalRecords from './Pages/Records/MedicalRecord';
import RecordView from './Pages/Records/RecordView';
import RecordForm from './components/Fiche/RecordForm';

// Appointments (RDV)
import Appointments from './Pages/Appointments/Appointments';
import AppointmentView from './Pages/Appointments/AppointmentView';
import RDVForm from './components/RDV/RDVForm';

// Medecin
import MedecinList from './Pages/Medecin/MedecinList';
import MedecinForm from './Pages/Medecin/MedecinView';
import AvailabilityForm from './components/Medecin/AvailabilityForm';

// Patient
import PatientList from './Pages/Patient/PatientList';
import PatientForm from './Pages/Patient/PatientView';
import NotFound from './Pages/NotFound';
import FactureList from './Pages/Facturation/FactureList';
import FactureForm from './Pages/Facturation/FactureForm';
import PaiementList from './Pages/Facturation/PaiementList';
import PaiementForm from './Pages/Facturation/PaiementForm';
import NavigationBarFacturation from './components/Facturation/NavigationBarFacturation';



const NavigationWrapper = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/appointments') || location.pathname.startsWith('/add-appointment')) {
    return <NavigationBarRDV />;
  } else if (location.pathname.startsWith('/medecins')) {
    return <NavigationBarMedecin />;
  } else if (location.pathname.startsWith('/patients')) {
    return <NavigationBarPatient />;
  }  else if (location.pathname.startsWith('/facturation')) {
    return <NavigationBarFacturation />;
  }else {
    return <NavigationBar />;
  }
};

function App() {
  return (
    <Router>
      <NavigationWrapper />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Medical Records Routes */}
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/medical-records/:id" element={<RecordView />} />
        <Route path="/add-record" element={<RecordForm />} />

        {/* Appointments Routes */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/:id" element={<AppointmentView />} />
        <Route path="/add-appointment" element={<RDVForm />} />

        {/* Medecin Routes */}
        <Route path="/medecins" element={<MedecinList />} />
        <Route path="/medecins/add" element={<MedecinForm />} />
        <Route path="/medecins/edit/:id" element={<MedecinForm />} />
        <Route path="/medecins/:medecinId/availability" element={<AvailabilityForm />} />

        {/* Patient Routes */}
        <Route path="/patients" element={<PatientList />} />
        <Route path="/patients/add" element={<PatientForm />} />
        <Route path="/patients/edit/:id" element={<PatientForm />} />
 {/* Facturation Routes */}
        <Route path="/facturation/factures" element={<FactureList />} />
        <Route path="/facturation/factures/add" element={<FactureForm />} />
        <Route path="/facturation/paiements" element={<PaiementList />} />
        <Route path="/facturation/paiements/add" element={<PaiementForm />} />
      
        // Add as the last route
        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </Router>
  );
}

export default App;
