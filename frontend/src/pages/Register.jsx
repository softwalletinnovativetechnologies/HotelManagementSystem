import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
      });

      alert("Registered successfully ✅");

      navigate("/login"); // 🔥 auto login page
    } catch (err) {
      console.log(err.response);
      alert(err.response?.data?.message || "Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f2f35] text-white">
      <div className="bg-white text-black p-10 rounded-2xl w-96 shadow-xl">
        <h2 className="text-2xl mb-6 font-semibold text-center">Register</h2>

        <input
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-[#0f2f35] text-white py-3 rounded hover:opacity-90 transition"
        >
          Register
        </button>

        {/* 🔥 LOGIN LINK */}
        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0f2f35] font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
