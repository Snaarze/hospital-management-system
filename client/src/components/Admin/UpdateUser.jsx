import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import useFetch from "../../hooks/useFetch";

const UpdateUser = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/users/${id}`
  );
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (datas) {
      setFormData({
        name: datas.name,
        email: datas.email,
        role: datas.role,
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
      await axios.put(`http://127.0.0.1:8000/api/users/${id}`, formData);
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
                User Information
              </h2>
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Role"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail address"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-lg font-bold text-teal-800 rounded-full transition-opacity duration-200 hover:opacity-70"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
