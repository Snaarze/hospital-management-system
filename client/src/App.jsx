import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Register } from "./components/Main";
import {
  Dashboard,
  Users,
  Patients,
  AddUser,
  Doctors,
  AddDoctor,
  AddPatient,
  UpdateUser,
  UpdatePatient,
  UpdateDoctor,
} from "./components/Admin";

import {
  PatientDashboard,
  PatientDoctors,
  MedicalRecords,
  BookAppointment,
  Appointments,
  UpdateAppointment,
} from "./components/Patient";

import {
  DoctorDashboard,
  DoctorPatients,
  DoctorMedicalRecords,
  AddMedicalRecord,
  UpdateMedicalRecord,
  DoctorAppointments,
} from "./components/Doctor";

import {
  ReceptionistDashboard,
  ReceptionistPatients,
  ReceptionistAddPatient,
  ReceptionistUpdatePatient,
  ReceptionistAppointments,
  AddAppointment,
} from "./components/Receptionist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Users />} />
          <Route path="manage/patients" element={<Patients />} />
          <Route path="manage/users/add" element={<AddUser />} />
          <Route path="manage/doctors" element={<Doctors />} />
          <Route path="manage/doctors/add" element={<AddDoctor />} />
          <Route path="manage/patients/add" element={<AddPatient />} />
          <Route path="manage/users/edit/:id" element={<UpdateUser />} />
          <Route path="manage/patients/edit/:id" element={<UpdatePatient />} />
          <Route path="manage/doctors/edit/:id" element={<UpdateDoctor />} />
        </Route>

        {/* Patient */}
        <Route path="/patient" element={<PatientDashboard />}>
          <Route index element={<MedicalRecords />} />
          <Route path="manage/doctors" element={<PatientDoctors />} />
          <Route
            path="manage/doctors/book-appointment"
            element={<BookAppointment />}
          />
          <Route path="manage/appointments" element={<Appointments />} />
          <Route
            path="manage/appointments/update/:id"
            element={<UpdateAppointment />}
          />
        </Route>

        {/* Doctor */}
        <Route path="/doctor" element={<DoctorDashboard />}>
          <Route index element={<DoctorPatients />} />
          <Route path="manage/patients/add" element={<AddPatient />} />
          <Route path="manage/patients/edit/:id" element={<UpdatePatient />} />
          <Route
            path="manage/medical-records"
            element={<DoctorMedicalRecords />}
          />
          <Route
            path="manage/medical-records/add"
            element={<AddMedicalRecord />}
          />
          <Route
            path="manage/medical-records/edit/:id"
            element={<UpdateMedicalRecord />}
          />
          <Route path="manage/appointments" element={<DoctorAppointments />} />
        </Route>

        {/* Receptionist */}
        <Route path="/receptionist" element={<ReceptionistDashboard />}>
          <Route index element={<ReceptionistPatients />} />
          <Route
            path="manage/patients/add"
            element={<ReceptionistAddPatient />}
          />
          <Route
            path="manage/patients/edit/:id"
            element={<ReceptionistUpdatePatient />}
          />
          <Route
            path="manage/appointments"
            element={<ReceptionistAppointments />}
          />
          <Route path="manage/appointments/add" element={<AddAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
