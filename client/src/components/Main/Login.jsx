import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import user from "../../assets/user.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/login`,
        formData
      );

      const { role } = response.data.user;

      if (role === "admin") {
        navigate("/admin");
      }

      if (role === "patient") {
        navigate("/patient");
      }

      if (role === "doctor") {
        navigate("/doctor");
      }

      if (role === "receptionist") {
        navigate("/receptionist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-300">
      <div className="w-full max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg">
        <div className="p-10 text-center">
          <div className="mb-8">
            <img className="mx-auto" src={user} width="45" alt="Logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 mb-12">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-16 bg-transparent border-b border-white/20 text-2xl text-white placeholder-white/70 text-center focus:outline-none"
                type="email"
                placeholder="E-mail address"
                required
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-16 bg-transparent border-b border-white/20 text-2xl text-white placeholder-white/70 text-center focus:outline-none"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="w-full h-12 bg-white text-lg font-bold text-teal-800 rounded-full transition-opacity duration-200 hover:opacity-70">
              Sign in
            </button>
          </form>
        </div>
        <div className="p-5 border-t border-white/20 text-white text-lg text-center">
          Don't Have an Account?{" "}
          <Link to="/register" className="text-white font-bold">
            Register Here
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;