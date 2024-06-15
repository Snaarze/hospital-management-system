import { useState } from "react";

import AddPatient from "./Form/AddPatient";
import AddDoctor from "./Form/AddDoctor";
import AddReceptionist from "./Form/AddReceptionist";

const AddUser = () => {
  const [role, setRole] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setRole(value);
  };

  return (
    <div className="min-h-[94vh] bg-blue-200 py-12">
      <div className="flex justify-between mx-auto w-[50%]">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="role"
            value="patient"
            onChange={handleChange}
            required
          />
          <span className="ml-2 text-xl ">Patient</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="role"
            value="doctor"
            onChange={handleChange}
            required
          />
          <span className="ml-2 text-xl">Doctor</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="role"
            value="receptionist"
            onChange={handleChange}
            required
          />
          <span className="ml-2 text-xl">Receptionist</span>
        </label>
      </div>

      {role === "patient" ? (
        <AddPatient role={role} />
      ) : role === "doctor" ? (
        <AddDoctor role={role} />
      ) : (
        <AddReceptionist role={role} />
      )}
    </div>
  );
};

export default AddUser;
