import { useEffect, useState } from "react";
import API from "../api/axios";
import {
  FaUsers,
  FaBed,
  FaCalendarCheck,
  FaHotel,
  FaHome,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    rooms: 0,
    bookings: 0,
  });

  const chartData = [
    { name: "Users", value: stats.users },
    { name: "Rooms", value: stats.rooms },
    { name: "Bookings", value: stats.bookings },
  ];
  const COLORS = ["#84a98c", "#023047", "#db5461"];

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersRes, roomsRes, bookingsRes] = await Promise.all([
        API.get("/users"),
        API.get("/rooms"),
        API.get("/bookings"),
      ]);

      setStats({
        users: usersRes.data.length,
        rooms: roomsRes.data.length,
        bookings: bookingsRes.data.length,
      });
    } catch (err) {
      console.log("ADMIN ERROR:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f1f5f9]">
      {/* 🔥 MAIN */}
      <div className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
            Admin Dashboard
          </h2>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-[#0f2027] text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            <FaHome /> Home
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading data...</p>
        ) : (
          <>
            {/* 🔥 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                title="Total Users"
                value={stats.users}
                icon={<FaUsers />}
                color="from-blue-300 to-indigo-800"
              />
              <Card
                title="Total Rooms"
                value={stats.rooms}
                icon={<FaBed />}
                color="from-green-400 to-emerald-500"
              />
              <Card
                title="Total Bookings"
                value={stats.bookings}
                icon={<FaCalendarCheck />}
                color="from-pink-400 to-yellow-200"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {/* 🔥 BAR CHART */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">System Overview</h3>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* 🔥 PIE CHART */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">Distribution</h3>

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      outerRadius={100}
                      label
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* 🔥 OUTLET (VERY IMPORTANT) */}
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;

//////////////////////////////////////////////////////////

function SidebarItem({ label, path, active }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
        active
          ? "bg-white/20 shadow-md"
          : "hover:bg-white/10 hover:translate-x-1"
      }`}
    >
      {label}
    </div>
  );
}

//////////////////////////////////////////////////////////

function Card({ title, value, icon, color }) {
  return (
    <div
      className={`p-6 rounded-xl text-white shadow-xl bg-gradient-to-r ${color} hover:scale-105 transition`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg">{title}</h3>
        <div className="text-2xl">{icon}</div>
      </div>

      <p className="text-3xl font-bold mt-4">{value}</p>
    </div>
  );
}
