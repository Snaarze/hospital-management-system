import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import useFetch from "../../hooks/useFetch";

const UpdateDoctor = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/doctor/${id}`
  );
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    specialization: "",
    licensed_number: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (datas) {
      setFormData({
        first_name: datas.first_name,
        last_name: datas.last_name,
        specialization: datas.specialization,
        licensed_number: datas.licensed_number,
        phone: datas.phone,
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
        `http://127.0.0.1:8000/api/doctor/update/${id}`,
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
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg my-8">
        <div className="p-10 text-center">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl text-slate-300 block mb-4">
                Doctor Information
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
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="number"
                name="licensed_number"
                value={formData.licensed_number}
                onChange={handleChange}
                placeholder="Licensed Number"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-lg font-bold text-teal-800 rounded-full transition-opacity duration-200 hover:opacity-70"
            >
              Update Doctor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDoctor;
