import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-[#f8f6f2] text-gray-900">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="absolute w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex flex-col justify-center h-full px-10 md:px-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-7xl font-light leading-tight"
          >
            A Stay Beyond <br /> Expectations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg max-w-lg text-gray-200"
          >
            Discover timeless luxury, exceptional service, and refined comfort.
          </motion.p>
        </div>
      </section>

      {/* TEXT BLOCK */}
      <section className="py-32 text-center max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl leading-relaxed text-gray-700"
        >
          Crafted for those who seek elegance, serenity and unforgettable
          experiences.
        </motion.p>
      </section>

      {/* IMAGE + TEXT (LEFT) */}
      <section className="grid md:grid-cols-2 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          className="w-full h-[600px] object-cover"
        />

        <div className="px-10 md:px-20">
          <h2 className="text-5xl font-light mb-6">Refined Rooms</h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Every room is designed to offer a seamless blend of comfort and
            luxury.
          </p>

          <button className="border-b border-black pb-1 hover:opacity-60 transition">
            Explore Rooms →
          </button>
        </div>
      </section>

      {/* PARALLAX LUXURY */}
      <section
        className="h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461')",
        }}
      >
        <h2 className="text-white text-5xl font-light">Pure Luxury</h2>
      </section>

      {/* IMAGE + TEXT (RIGHT) */}
      <section className="grid md:grid-cols-2 items-center">
        <div className="px-10 md:px-20">
          <h2 className="text-5xl font-light mb-6">Elevated Experience</h2>

          <p className="text-gray-600 mb-6">
            From fine dining to wellness, everything is curated for excellence.
          </p>

          <button className="border-b border-black pb-1 hover:opacity-60 transition">
            Discover →
          </button>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          className="w-full h-[600px] object-cover"
        />
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-light mb-6">Reserve Your Stay</h2>

        <button className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition">
          Book Now
        </button>
      </section>
    </div>
  );
}

export default Home;
