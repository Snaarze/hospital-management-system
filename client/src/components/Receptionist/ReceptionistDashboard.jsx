import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const ReceptionistDashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ReceptionistDashboard;
