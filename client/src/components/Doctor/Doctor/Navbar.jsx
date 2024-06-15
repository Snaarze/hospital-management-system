import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 flex justify-between items-center p-3">
      <ul className="flex mx-auto text-base gap-4">
        <li className="relative">
          <NavLink
            to="/doctor"
            className="text-white text-center font-bold px-3 rounded-md"
          >
            Patients
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/doctor/manage/medical-records"
            className="text-white text-center font-bold px-3 rounded-md"
          >
            Medical Records
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/doctor/manage/appointments"
            className="text-white text-center font-bold px-3 rounded-md"
          >
            Appointments
          </NavLink>
        </li>
      </ul>
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
