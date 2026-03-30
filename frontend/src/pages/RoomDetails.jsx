import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  // 🔥 FETCH ROOM
  useEffect(() => {
    API.get(`/rooms/${id}`)
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 BOOKING + PAYMENT
  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Login required ❗");
      navigate("/login");
      return;
    }

    if (!form.checkIn || !form.checkOut) {
      alert("Select dates ❗");
      return;
    }

    try {
      // ✅ CREATE ORDER
      const { data } = await API.post("/payment/order", {
        roomId: room._id,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
      });

      // ✅ LOAD RAZORPAY
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        const options = {
          key: "rzp_test_SF9gQqBJH2B5mx",
          amount: data.amount,
          currency: "INR",
          name: "Luxury Hotel",
          description: room.name,
          order_id: data.id,

          handler: async function (response) {
            await API.post("/bookings", {
              ...form,
              roomId: room._id,
              paymentId: response.razorpay_payment_id,
            });

            alert("🎉 Booking Successful");
            setShowForm(false);
          },

          prefill: {
            name: form.name,
            email: form.email,
            contact: form.phone,
          },

          theme: {
            color: "#0f2f35",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      document.body.appendChild(script);
    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  };

  if (!room) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="bg-[#0f2f35] text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[80vh]">
        <img src={room.image} className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-light"
          >
            {room.name}
          </motion.h1>

          <p className="mt-4 text-lg text-gray-300 max-w-lg">
            {room.description}
          </p>

          <h2 className="mt-6 text-2xl font-light">₹{room.price} / night</h2>

          <button
            onClick={() => setShowForm(true)}
            className="mt-6 bg-[#eae3d2] text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-2xl p-8 w-[90%] max-w-md shadow-2xl">
            <h2 className="text-2xl mb-6 font-semibold text-center">
              Book {room.name}
            </h2>

            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full mb-3 p-3 border rounded"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full mb-3 p-3 border rounded"
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full mb-3 p-3 border rounded"
            />

            <div className="flex gap-2">
              <input
                type="date"
                name="checkIn"
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
              <input
                type="date"
                name="checkOut"
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleBooking}
                className="px-6 py-2 bg-[#0f2f35] text-white rounded hover:opacity-90"
              >
                Pay & Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomDetails;
