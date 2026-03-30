import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful ✅");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f2f35] text-white">
      <div className="bg-white text-black p-10 rounded-2xl w-96 shadow-xl">
        <h2 className="text-2xl mb-6 font-semibold text-center">Login</h2>

        <input
          type="email"
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
          onClick={handleLogin}
          className="w-full bg-[#0f2f35] text-white py-3 rounded hover:opacity-90 transition"
        >
          Login
        </button>

        {/* 🔥 REGISTER LINK */}
        <p className="text-center mt-5 text-sm text-gray-600">
          New user?{" "}
          <Link to="/register" className="text-[#0f2f35] font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
