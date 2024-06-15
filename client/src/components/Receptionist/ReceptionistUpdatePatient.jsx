import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import useFetch from "../../hooks/useFetch";

const ReceptionistUpdatePatient = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/patients/${id}`
  );
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    address: "",
    phone: "",
    emergency_contact: "",
    medical_history: "",
  });

  useEffect(() => {
    if (datas) {
      setFormData({
        first_name: datas.first_name,
        last_name: datas.last_name,
        date_of_birth: datas.date_of_birth,
        gender: datas.gender,
        address: datas.address,
        phone: datas.phone,
        emergency_contact: datas.emergency_contact,
        medical_history: datas.medical_history,
      });
    }
  }, [datas]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `http://127.0.0.1:8000/api/patient/update/${id}`,
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
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="w-full max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg my-8">
        <div className="p-10 text-center">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl text-slate-300 block mb-4">
                Patient Information
              </h2>
              <div className="flex gap-4">
                <input
                  className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <span className="text-xl text-slate-300 block mb-4">
                  Select Your Gender
                </span>
                <div className="flex justify-between">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-xl text-slate-100">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-xl text-slate-100">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="other"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-xl text-slate-100">Other</span>
                  </label>
                </div>
                <div className="mt-6">
                  <span className="text-xl text-slate-300 block mb-4">
                    Birthdate
                  </span>
                  <input
                    name="date_of_birth"
                    type="date"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                  />
                </div>
              </div>
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="emergency_contact"
                value={formData.emergency_contact}
                onChange={handleChange}
                placeholder="Emergency Contact"
                required
              />
              <textarea
                className="w-full h-24 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                name="medical_history"
                value={formData.medical_history}
                onChange={handleChange}
                id="medical_history"
                placeholder="Brief medical history..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-lg font-bold text-teal-800 rounded-full transition-opacity duration-200 hover:opacity-70"
            >
              Update Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistUpdatePatient;
