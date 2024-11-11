import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Admin Navigation Bars
import NavigationBarFiche from './components/Admin/Fiche/NavigationBarFiche';
import NavigationBarRDV from './components/Admin/RDV/NavigationBar';
import NavigationBarMedecin from './components/Admin/Medecin/NavigationBarMedecin';
import NavigationBarPatient from './components/Admin/Patient/NavigationBarPatient';
import NavigationBarFacturation from './components/Admin/Facturation/NavigationBarFacturation';
// User and Admin Pages
import Home from './Pages/Admin/Dashboard'; // Admin home
import UserHome from './Pages/User/UserHome'; // User-facing homepage

// Admin Pages - Medical Records, Appointments (RDV), Medecin, Patient, Facturation
import MedicalRecords from './Pages/Admin/Records/MedicalRecord';
import RecordView from './Pages/Admin/Records/RecordView';
import RecordForm from './components/Admin/Fiche/RecordForm';
import Appointments from './Pages/Admin/Appointments/Appointments';
import AppointmentView from './Pages/Admin/Appointments/AppointmentView';
import RDVForm from './components/Admin/RDV/RDVForm';
import MedecinList from './Pages/Admin/Medecin/MedecinList';
import MedecinForm from './Pages/Admin/Medecin/MedecinView';
import AvailabilityForm from './components/Admin/Medecin/AvailabilityForm';
import PatientList from './Pages/Admin/Patient/PatientList';
import PatientForm from './Pages/Admin/Patient/PatientView';
import FactureList from './Pages/Admin/Facturation/FactureList';
import FactureForm from './Pages/Admin/Facturation/FactureForm';
import PaiementList from './Pages/Admin/Facturation/PaiementList';
import PaiementForm from './Pages/Admin/Facturation/PaiementForm';

// Common Page
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/Admin/Dashboard';
import NavigationBar from './components/Admin/NavigationBar';
// Wrapper to determine which navigation bar to show for admin routes
const AdminNavigationWrapper = () => {
  const location = useLocation();
  if (location.pathname === '/admin') {
    return <NavigationBar />;}
    else  if (location.pathname.startsWith('/admin/appointments') || location.pathname.startsWith('/admin/add-appointment')) {
    return <NavigationBarRDV />;
  } else if (location.pathname.startsWith('/admin/medecins')) {
    return <NavigationBarMedecin />;
  } else if (location.pathname.startsWith('/admin/patients')) {
    return <NavigationBarPatient />;
  } else if (location.pathname.startsWith('/admin/facturation')) {
    return <NavigationBarFacturation />;
  } else if (location.pathname.startsWith('/admin/medical-records')|| location.pathname.startsWith('/admin/add-record'))  {
    return <NavigationBarFiche/>;
  } else {
    return <NavigationBar/>;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/user" element={<UserHome />} />
        <Route path="/admin" element={<Dashboard />} />

        {/* Admin Routes with Navigation */}
        <Route path="/admin/*" element={
          <>
            <AdminNavigationWrapper />
            <Routes>
              {/* Medical Records Routes */}
              <Route path="medical-records" element={<MedicalRecords />} />
              <Route path="medical-records/:id" element={<RecordView />} />
              <Route path="add-record" element={<RecordForm />} />

              {/* Appointments Routes */}
              <Route path="appointments" element={<Appointments />} />
              <Route path="appointments/:id" element={<AppointmentView />} />
              <Route path="add-appointment" element={<RDVForm />} />

              {/* Medecin Routes */}
              <Route path="medecins" element={<MedecinList />} />
              <Route path="medecins/add" element={<MedecinForm />} />
              <Route path="medecins/edit/:id" element={<MedecinForm />} />
              <Route path="medecins/:medecinId/availability" element={<AvailabilityForm />} />

              {/* Patient Routes */}
              <Route path="patients" element={<PatientList />} />
              <Route path="patients/add" element={<PatientForm />} />
              <Route path="patients/edit/:id" element={<PatientForm />} />

              {/* Facturation Routes */}
              <Route path="facturation/factures" element={<FactureList />} />
              <Route path="facturation/factures/add" element={<FactureForm />} />
              <Route path="facturation/paiements" element={<PaiementList />} />
              <Route path="facturation/paiements/add" element={<PaiementForm />} />

              {/* Fallback for admin not found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        } />

        {/* Fallback for user and other invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
