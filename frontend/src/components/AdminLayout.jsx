import { Outlet, NavLink } from "react-router-dom";
import {
  FaBed,
  FaUsers,
  FaCalendarCheck,
  FaTachometerAlt,
} from "react-icons/fa";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#f4f7fb]">
      {/* 🔥 SIDEBAR */}
      <div className="w-64 fixed h-full bg-gradient-to-b from-[#0f2027] to-[#203a43] text-white p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-10 tracking-wide">HMS Admin</h1>

        <nav className="space-y-4">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/rooms"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            <FaBed />
            Rooms
          </NavLink>

          <NavLink
            to="/admin/bookings"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            <FaCalendarCheck />
            Bookings
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            <FaUsers />
            Users
          </NavLink>
        </nav>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="ml-64 flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
