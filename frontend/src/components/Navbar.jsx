import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  // ✅ get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f2f35]/80 backdrop-blur-md shadow-lg"
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 text-white">
        {/* 🔥 LEFT */}
        <div className="hidden md:flex gap-6 text-sm tracking-wide">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/rooms">ROOMS</Link>
        </div>

        {/* 🔥 LOGO */}
        <h1 className="text-xl md:text-2xl tracking-[5px] font-semibold">
          HOTEL
        </h1>

        {/* 🔥 RIGHT */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block">
            CONTACT
          </Link>

          {/* ✅ USER LOGGED IN */}
          {user ? (
            <div className="relative">
              <div
                onClick={() => setDropdown(!dropdown)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4fc3c8] text-black font-bold cursor-pointer"
              >
                {user.name?.charAt(0).toUpperCase()}
              </div>

              {/* 🔥 DROPDOWN */}
              {dropdown && (
                <div className="absolute right-0 mt-3 w-48 bg-white text-black rounded-xl shadow-xl overflow-hidden">
                  {/* USER */}
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    My Profile
                  </button>

                  {/* BOOKINGS */}
                  <button
                    onClick={() => {
                      navigate("/my-bookings");
                      setDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    My Bookings
                  </button>

                  {/* ADMIN */}
                  {user.role === "admin" && (
                    <button
                      onClick={() => {
                        navigate("/admin");
                        setDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-blue-600"
                    >
                      Admin Dashboard
                    </button>
                  )}

                  {/* LOGOUT */}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* LOGIN */}
              <button
                onClick={() => navigate("/login")}
                className="hidden md:block px-4 py-2 border border-[#4fc3c8] rounded-full text-sm hover:bg-[#4fc3c8] hover:text-black transition"
              >
                Sign In
              </button>

              {/* REGISTER */}
              <button
                onClick={() => navigate("/register")}
                className="hidden md:block bg-[#4fc3c8] px-4 py-2 rounded-full text-sm text-black"
              >
                Sign Up
              </button>
            </>
          )}

          {/* 🔥 MOBILE MENU ICON */}
          <div
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f2f35] text-white px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>
            ROOMS
          </Link>

          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="block w-full text-left"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("/register")}
                className="block w-full text-left"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/profile")}>My Profile</button>

              <button onClick={() => navigate("/my-bookings")}>
                My Bookings
              </button>

              {user.role === "admin" && (
                <button onClick={() => navigate("/admin")}>
                  Admin Dashboard
                </button>
              )}

              <button onClick={handleLogout} className="text-red-400">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
