import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const DoctorDashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DoctorDashboard;
