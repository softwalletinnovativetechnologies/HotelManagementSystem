import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [stats, setStats] = useState({
    rooms: 0,
    bookings: 0,
    users: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [roomsRes, bookingsRes, usersRes] = await Promise.all([
        API.get("/rooms"),
        API.get("/bookings"),
        API.get("/users"),
      ]);

      setStats({
        rooms: roomsRes.data.length,
        bookings: bookingsRes.data.length,
        users: usersRes.data.length,
      });
    } catch (err) {
      console.log("ADMIN ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0f2f35] text-white pt-20">
      {/* Sidebar */}
      <div className="w-64 bg-[#082126] p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <p>Dashboard</p>
        <p>Rooms</p>
        <p>Bookings</p>
        <p>Users</p>
      </div>

      {/* Main */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h2>Total Rooms</h2>
            <p className="text-2xl font-bold">{stats.rooms}</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h2>Total Bookings</h2>
            <p className="text-2xl font-bold">{stats.bookings}</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h2>Total Users</h2>
            <p className="text-2xl font-bold">{stats.users}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
