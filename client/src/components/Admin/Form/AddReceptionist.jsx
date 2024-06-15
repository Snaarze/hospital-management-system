import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddReceptionist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/receptionist/register",
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
          role: "receptionist",
        }
      );
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg my-8">
        <div className="p-10 text-center">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl text-slate-300 block mb-4">
                Receptionist Information
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
            </div>
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl text-slate-300 block mb-4">
                Receptionist Account
              </h2>
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail address"
                required
              />
              <input
                className="w-full h-12 bg-transparent border-b border-white/20 text-xl text-white placeholder-white/70 text-center focus:outline-none"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-lg font-bold text-teal-800 rounded-full transition-opacity duration-200 hover:opacity-70"
            >
              Add Receptionist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddReceptionist;
