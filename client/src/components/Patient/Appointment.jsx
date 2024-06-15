import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Appointment = ({ data, onUpdateClick }) => {
  const { id, doctor_id, appointment_date, reason } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeAppointment = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/appointment/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mb-3 shadow-sm">
      <div className="bg-white rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <p className="text-lg font-semibold">
              <strong>Doctor ID:</strong> {doctor_id}
            </p>
            <p className="text-sm">
              <strong>Appointment Date:</strong> {appointment_date}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-sm">
              <strong>Reason:</strong> {reason}
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-end gap-2 mt-3">
          <Link
            to={`update/${id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Update Schedule
          </Link>
          <button
            onClick={openModal}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-lg mx-auto my-6">
            {/* Modal content */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
                <h4 className="text-lg font-semibold">Confirm Removal</h4>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4 py-6">
                <p className="text-sm text-gray-700">
                  Are you sure you want to remove this appointment?
                </p>
              </div>
              <div className="flex justify-end px-4 py-2 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none mr-4"
                >
                  Cancel
                </button>
                <button
                  onClick={removeAppointment}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End Modal */}
    </div>
  );
};

export default Appointment;
