import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f2f35] text-slate-500 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-6 md:px-20 pt-28 text-center">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-[#0f2f35]/80" />

        {/* TEXT CENTER FIX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto mt-6 md:mt-0"
        >
          <p className="text-[#a6b6b7] tracking-widest mb-4">ABOUT OUR HOTEL</p>

          <h1 className="text-4xl md:text-6xl font-light leading-[1.2] md:leading-[1.1] px-2">
            Where Luxury Meets <br /> Comfort & Elegance
          </h1>
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
        {/* STORY */}
        <section className="grid md:grid-cols-2 gap-14 px-6 md:px-20 items-center">
          {/* IMAGE FIX */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop"
              alt="hotel"
              className="rounded-3xl shadow-xl w-full h-[400px] object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-500 mb-2">OUR STORY</p>

            <h2 className="text-4xl font-light mb-4">
              Designed For Luxury & Comfort Living
            </h2>

            <p className="text-gray-600 mb-6">
              Our hotel blends modern elegance with timeless comfort. Every
              detail is crafted to deliver exceptional guest experiences.
            </p>

            <button
              onClick={() => navigate("/rooms")}
              className="bg-[#0f2f35] text-white px-6 py-3 rounded-full hover:bg-[#4fc3c8] transition"
            >
              Discover More
            </button>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-light mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Luxury Rooms", "Premium Services", "24/7 Support"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-3xl shadow-xl p-8"
                >
                  <h3 className="text-xl mb-3">{item}</h3>
                  <p className="text-gray-500 text-sm">
                    Experience unmatched quality and comfort in every stay.
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </section>

        {/* PARALLAX */}
        <section
          className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <h2 className="text-white text-5xl font-light">
            Experience Pure Luxury
          </h2>
        </section>

        {/* COMMITMENT FIX */}
        <section className="py-24 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* TEXT CENTER */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl font-light mb-4">Our Commitment</h2>

              <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
                We are dedicated to providing world-class hospitality with
                personalized service, ensuring every guest enjoys a memorable
                stay.
              </p>
            </motion.div>

            {/* IMAGE FIX (IMPORTANT) */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                alt="commitment"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg";
                }}
                className="rounded-3xl shadow-xl w-full max-w-[500px] h-[350px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
