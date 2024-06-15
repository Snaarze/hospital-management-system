import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import useFetch from "../../hooks/useFetch";

const UpdateAppointment = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/appointment/${id}`
  );
  const [formData, setFormData] = useState({
    patient_id: "",
    doctor_id: "",
    appointment_date: "",
    status: "",
    reason: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (datas) {
      setFormData({
        patient_id: datas.patient_id,
        doctor_id: datas.doctor_id,
        appointment_date: datas.appointment_date,
        status: datas.status,
        reason: datas.reason,
      });
    }
  }, [datas]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `http://127.0.0.1:8000/api/appointment/update/${id}`,
        formData
      );
      navigate("../");
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg my-8">
        <div className="p-10 text-center">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl text-white mb-4">Appointment</h2>
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="number"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
                placeholder="Patient ID"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="number"
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
                placeholder="Doctor ID"
                required
              />
              <div className="mt-6">
                <span className="text-xl text-white block mb-2">
                  Appointment Date
                </span>
                <input
                  name="appointment_date"
                  type="date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                />
              </div>
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Status"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-lg font-bold text-teal-800 rounded-full transition-opacity duration-200 hover:opacity-70"
            >
              Update Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAppointment;
