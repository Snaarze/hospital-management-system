import { useState } from "react";
import { Link } from "react-router-dom";

import edit from "../../assets/edit.png";
import axios from "axios";

const DoctorMedicalRecord = ({ data }) => {
  const { id, patient_id, doctor_id, visit_date, diagnosis, treatment, notes } =
    data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsModalOpen(false);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/medical-record/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <td className="p-4 text-center">{patient_id}</td>
        <td className="p-4 text-center">{doctor_id}</td>
        <td className="p-4 text-center">{visit_date}</td>
        <td className="p-4 text-center">{diagnosis}</td>
        <td className="p-4 text-center">{treatment}</td>
        <td className="p-4 text-center">{notes}</td>
        <td className="flex gap-4 justify-center p-4">
          <Link to={`edit/${id}`}>
            <img src={edit} alt="Edit" className="w-6" />
          </Link>
        </td>
      </tr>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this patient?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorMedicalRecord;
