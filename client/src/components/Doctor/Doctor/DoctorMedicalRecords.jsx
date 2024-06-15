import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import DoctorMedicalRecord from "./DoctorMedicalRecord";

const DoctorMedicalRecords = () => {
  const { datas, isLoading, error } = useFetch(
    "http://127.0.0.1:8000/api/medical-records"
  );

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 "></div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="flex justify-between mx-auto w-[90%] mt-12">
          <h1 className="text-3xl">Medical Records</h1>
          <Link
            to="add"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Medical Record
          </Link>
        </div>
      </div>
      <table className="w-full mt-12">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Doctor ID</th>
            <th>Visit Date</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <DoctorMedicalRecord key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DoctorMedicalRecords;
