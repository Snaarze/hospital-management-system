import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import edit from "../../assets/edit.png";
import del from "../../assets/delete.png";

const Doctor = ({ data }) => {
  const { id, first_name, last_name, specialization, licensed_number, phone } =
    data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsModalOpen(false);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/doctor/${id}`);
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
        <td className="p-4 text-center">{first_name}</td>
        <td className="p-4 text-center">{last_name}</td>
        <td className="p-4 text-center">{specialization}</td>
        <td className="p-4 text-center">{licensed_number}</td>
        <td className="p-4 text-center">{phone}</td>
        <td className="flex gap-4 justify-center p-4">
          <Link to={`edit/${id}`}>
            <img src={edit} alt="Edit" className="w-6" />
          </Link>
          <button onClick={handleDeleteClick}>
            <img src={del} alt="Delete" className="w-6" />
          </button>
        </td>
      </tr>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this doctor?</p>
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

export default Doctor;
