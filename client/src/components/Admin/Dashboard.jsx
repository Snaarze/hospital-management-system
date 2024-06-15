import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Dashboard;
