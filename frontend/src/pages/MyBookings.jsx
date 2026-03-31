import { useEffect, useState } from "react";
import API from "../api/axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings/my");
        setBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 md:px-20 bg-[#f4f7fb]">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">My Bookings</h2>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th>Room</th>
              <th>Dates</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-b">
                <td>{b.room?.name}</td>
                <td>
                  {new Date(b.checkIn).toLocaleDateString()} -{" "}
                  {new Date(b.checkOut).toLocaleDateString()}
                </td>
                <td>₹{b.totalAmount}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBookings;
