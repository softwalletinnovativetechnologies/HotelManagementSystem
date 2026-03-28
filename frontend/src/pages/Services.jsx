import { motion } from "framer-motion";

function Services() {
  return (
    <div className="bg-[#0f2f35] text-yellow-700 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-6 md:px-20 pt-40 md:pt-48 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-[#0f2f35]/80" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <p className="text-[#9bd3d8] tracking-widest mb-4">OUR SERVICES</p>

          <h1 className="text-4xl md:text-6xl font-light leading-[1.2]">
            Experience Premium <br /> Hospitality & Comfort
          </h1>

          <p className="mt-6 text-gray-300">
            Discover a range of world-class services designed to elevate your
            stay.
          </p>
        </motion.div>

        {/* WAVE */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#eaf3f3"
              d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,128C840,128,960,160,1080,181.3C1200,203,1320,213,1380,218.7L1440,224V320H0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* MAIN */}
      <div className="bg-[#eaf3f3] text-black rounded-t-[100px] -mt-20 pt-24 relative z-20">
        {/* SERVICES GRID */}
        <section className="px-6 md:px-20 py-20 text-center">
          <h2 className="text-4xl font-light mb-12">
            Best Convenience Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Luxury Rooms",
                img: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
              },
              {
                title: "Fine Dining",
                img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
              },
              {
                title: "High-Speed WiFi",
                img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <img src={service.img} className="h-60 w-full object-cover" />

                <div className="p-6">
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm">
                    Enjoy premium quality service designed for your comfort and
                    luxury stay.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="grid md:grid-cols-2 gap-14 px-6 md:px-20 items-center pb-20">
          <motion.img
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-light mb-4">
              Luxury Experience Redefined
            </h2>

            <p className="text-gray-600 mb-6">
              We provide top-tier services from spa, dining, and personalized
              hospitality to ensure your stay is unforgettable.
            </p>

            <button className="bg-[#4fc3c8] px-6 py-3 rounded-full text-white hover:scale-105 transition">
              Explore More
            </button>
          </motion.div>
        </section>

        {/* PARALLAX */}
        <section
          className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg')",
          }}
        >
          <h2 className="text-white text-5xl font-light">
            Unmatched Luxury Services
          </h2>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready To Experience Luxury?
          </h2>

          <button className="bg-[#0f2f35] text-white px-8 py-4 rounded-full hover:scale-105 transition">
            Book Your Stay
          </button>
        </section>
      </div>
    </div>
  );
}

export default Services;
