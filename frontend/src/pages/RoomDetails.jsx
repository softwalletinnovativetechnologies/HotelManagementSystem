import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 10;

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    axios
      .get("http://localhost:5000/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLast = currentPage * roomsPerPage;
  const indexOfFirst = indexOfLast - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  return (
    <div className="bg-[#0f2f35] text-white min-h-screen pt-40">
      <h1 className="text-center text-4xl mb-10">Our Rooms</h1>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {currentRooms.map((room, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black rounded-xl overflow-hidden"
          >
            <img src={room.image} className="h-60 w-full object-cover" />

            <div className="p-4">
              <h3 className="text-xl">{room.name}</h3>
              <p className="text-gray-600">₹{room.price} / night</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-4 mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className="bg-white text-black px-4 py-2 rounded"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
