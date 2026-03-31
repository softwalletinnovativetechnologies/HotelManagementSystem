import { useEffect, useState } from "react";
import API from "../api/axios";
import { FaTrash } from "react-icons/fa";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log("USER ERROR:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await API.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8 bg-[#f4f7fb] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">
        Users Management
      </h2>

      {/* 🔥 STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-[#3a7bd5] to-[#3a6073] text-white p-6 rounded-xl shadow">
          <h3>Total Users</h3>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>

        <div className="bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-white p-6 rounded-xl shadow">
          <h3>Admins</h3>
          <p className="text-3xl font-bold">
            {users.filter((u) => u.role === "admin").length}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white p-6 rounded-xl shadow">
          <h3>Customers</h3>
          <p className="text-3xl font-bold">
            {users.filter((u) => u.role !== "admin").length}
          </p>
        </div>
      </div>

      {/* 🔥 TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-400">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  {/* USER */}
                  <td className="p-4">
                    <div className="font-medium">{user.name}</div>
                  </td>

                  {/* EMAIL */}
                  <td>{user.email}</td>

                  {/* ROLE */}
                  <td>
                    {user.role === "admin" ? (
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded text-sm">
                        Admin
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">
                        User
                      </span>
                    )}
                  </td>

                  {/* DATE */}
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>

                  {/* ACTION */}
                  <td>
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(user._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
