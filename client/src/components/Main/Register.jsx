import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import user from "../../assets/user.png";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    address: "",
    phone: "",
    emergency_contact: "",
    medical_history: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
      console.log(formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/register",
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          date_of_birth: formData.date_of_birth,
          gender: formData.gender,
          address: formData.address,
          phone: formData.phone,
          emergency_contact: formData.emergency_contact,
          medical_history: formData.medical_history,
          email: formData.email,
          password: formData.password,
          role: "patient",
        }
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-300">
      <div className="w-full max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg my-8">
        <div className="p-10 text-center">
          <div className="mb-8">
            <img className="mx-auto" src={user} width="45" alt="Logo" />
          </div>
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
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl text-slate-300 block mb-4">
                Patient Account
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
              Register
            </button>
          </form>
        </div>
        <div className="p-5 border-t border-white/20 text-white text-lg text-center">
          Already Have an Account?{" "}
          <Link to="/" className="text-white font-bold">
            Login Here
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Register;