import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const PatientDashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PatientDashboard;
