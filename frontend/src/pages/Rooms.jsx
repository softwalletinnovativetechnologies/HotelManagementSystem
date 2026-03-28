import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#0f2f35] text-white min-h-screen overflow-hidden">
      {/* 🔥 HERO */}
      <section className="relative h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* IMAGE */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="absolute w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0f2f35]/70" />

        {/* TEXT */}
        <div className="relative z-10 px-10 md:px-32 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-light leading-tight"
          >
            Choose Your Perfect <br /> Luxury Stay
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-gray-200 max-w-lg "
          >
            Explore our finest collection of rooms designed for elegance and
            comfort.
          </motion.p>
        </div>

        {/* ✅ CLEAN PREMIUM WAVE */}
        <div className="absolute bottom-0 w-full leading-none">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="w-full h-[120px]"
          >
            <path
              fill="#eae3d2"
              d="M0,160 C360,80 1080,240 1440,160 L1440,200 L0,200 Z"
            />
          </svg>
        </div>
      </section>

      {/* 🔥 ROOMS SECTION */}
      <section className="bg-[#eae3d2] text-black pt-16 pb-28 px-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-center mb-16 font-light"
        >
          Our Luxury Rooms
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          {rooms.map((room, i) => (
            <motion.div
              key={room._id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={room.image}
                alt={room.name}
                className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-light tracking-wide">
                  {room.name}
                </h3>

                <p className="text-gray-300 mt-1">₹{room.price} / night</p>

                <Link to={`/rooms/${room._id}`}>
                  <button className="mt-4 border-b border-white pb-1 hover:opacity-70 transition">
                    View Details →
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Rooms;
