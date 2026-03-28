import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-[#0f2f35] text-white overflow-hidden">
      {/* 🔥 HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 pt-28">
        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2f35]/90 to-[#0f2f35]/70 z-0" />

        {/* CONTENT */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm tracking-[3px] text-[#9bd3d8] mb-4">
              GET LUXURY & COMFORT
            </p>

            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              The Best Coolest Place Where Luxury Meets Affordability
            </h1>

            <p className="mt-6 text-gray-300 max-w-lg">
              Experience unmatched comfort with premium facilities and
              world-class service.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#4fc3c8] px-6 py-3 rounded-full hover:scale-105 transition">
                Book Now
              </button>

              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Explore Now
              </button>
            </div>

            {/* FLOAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 bg-white text-black p-5 rounded-2xl flex items-center justify-between max-w-md shadow-2xl"
            >
              <div>
                <p className="text-sm text-gray-500">PRICE STARTS FROM</p>
                <h3 className="text-xl font-semibold">$299 / night</h3>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0f2f35]">4.7</h3>
                <p className="text-sm text-gray-500">Google Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
              className="rounded-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] hover:scale-105 transition duration-700"
            />
          </motion.div>
        </div>

        {/* 🔥 FIXED WAVE */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#eaf3f3"
              d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,128C840,128,960,160,1080,181.3C1200,203,1320,213,1380,218.7L1440,224V320H0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* 🔥 CURVE SECTION */}
      <div className="bg-[#eaf3f3] text-black rounded-t-[100px] -mt-24 pt-24 relative z-20">
        {/* ABOUT */}
        <section className="grid md:grid-cols-2 gap-14 px-6 md:px-20 items-center">
          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-5"
          >
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              className="rounded-2xl shadow-lg hover:scale-105 transition"
            />
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="rounded-2xl mt-12 shadow-lg hover:scale-105 transition"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm text-gray-500 mb-2">ABOUT US</p>

            <h2 className="text-4xl font-light mb-4">
              We Can Help You Feel More Comfortable
            </h2>

            <p className="text-gray-600 mb-6">
              Enjoy luxury rooms, premium services and unmatched hospitality.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-lg flex justify-between items-center hover:shadow-2xl transition">
              <div>
                <p className="text-sm text-gray-500">Contact Us</p>
                <h3 className="font-semibold">+91 9876543210</h3>
              </div>

              <button className="bg-[#4fc3c8] px-4 py-2 rounded-lg text-white hover:scale-105 transition">
                Mail Us
              </button>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="py-24 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-light mb-12">
            Best Convenience Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Room Service", "Tea & Breakfast", "Fiber Internet"].map(
              (service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl mb-2">{service}</h3>
                    <p className="text-gray-500 text-sm">
                      Premium service with luxury comfort.
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
