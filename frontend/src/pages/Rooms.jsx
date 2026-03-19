import { useEffect, useState } from "react";
import { getRooms } from "../api/api";
import { motion } from "framer-motion";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  return (
    <div className="bg-white pt-24">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-light">Our Rooms</h1>
      </div>

      {/* ROOMS */}
      <div className="px-6 md:px-32 space-y-20">
        {rooms.map((room, i) => (
          <motion.div
            key={room._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={
                room.image ||
                "https://images.unsplash.com/photo-1590490360182-c33d57733427"
              }
              className="rounded-lg shadow-lg"
            />

            <div>
              <h2 className="text-3xl font-light mb-3">{room.name}</h2>

              <p className="text-gray-600 mb-4">
                {room.type} • {room.maxGuests} Guests
              </p>

              <p className="text-xl mb-4">₹{room.price} / night</p>

              <button className="border px-6 py-2 hover:bg-black hover:text-white transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
