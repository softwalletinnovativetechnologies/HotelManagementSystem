import { useEffect, useState } from "react";
import API from "../api/axios";
import { FaTrash } from "react-icons/fa";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log("BOOKING ERROR:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    try {
      await API.delete(`/bookings/${id}`);
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8 bg-[#f4f7fb] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">
        Bookings Management
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">User</th>
              <th className="text-left">Room</th>
              <th>Dates</th>
              <th>Guests</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-400">
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b._id} className="border-t hover:bg-gray-50">
                  {/* USER */}
                  <td className="p-4 font-medium">
                    {b.user?.name || "N/A"}
                    <p className="text-xs text-gray-400">{b.user?.email}</p>
                  </td>

                  {/* ROOM */}
                  <td>{b.room?.name || "Room"}</td>

                  {/* DATES */}
                  <td className="text-center text-sm">
                    {new Date(b.checkIn).toLocaleDateString()}
                    <br />
                    to
                    <br />
                    {new Date(b.checkOut).toLocaleDateString()}
                  </td>

                  {/* GUESTS */}
                  <td className="text-center">
                    👨 {b.adults || 1} | 👶 {b.children || 0}
                  </td>

                  {/* AMOUNT */}
                  <td className="text-center font-semibold text-green-600">
                    ₹{b.totalAmount}
                  </td>

                  {/* STATUS */}
                  <td className="text-center">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                      {b.status || "Confirmed"}
                    </span>
                  </td>

                  {/* ACTION */}
                  <td className="text-center">
                    <FaTrash
                      className="text-red-500 cursor-pointer mx-auto"
                      onClick={() => handleDelete(b._id)}
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

export default AdminBookings;
