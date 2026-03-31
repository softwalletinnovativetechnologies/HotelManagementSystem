import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] pt-32 px-6 md:px-20">
      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
        <p className="text-gray-500">
          We’d love to hear from you — Reach out anytime ✨
        </p>
      </motion.div>

      {/* 🔥 MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* 🔥 LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Send Message
          </h2>

          {/* ✅ FORM SUBMIT INTEGRATION */}
          <form
            action="https://formsubmit.co/info@softwalletinnovativetechnologies.cloud"
            method="POST"
            className="space-y-5"
          >
            {/* 🔥 HIDDEN INPUTS */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Message" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/contact"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#4fc3c8]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#4fc3c8]"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#4fc3c8]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0f2f35] text-white py-3 rounded-lg hover:bg-[#4fc3c8] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* 🔥 RIGHT - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <FaPhoneAlt className="text-[#4fc3c8] text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-semibold text-gray-700">+91 9596393658</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <FaEnvelope className="text-[#4fc3c8] text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold text-gray-700">
                info@softwalletinnovativetechnologies.cloud
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#4fc3c8] text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-semibold text-gray-700">
                Srinagar, Jammu & Kashmir, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔥 MAP */}
      <div className="mt-14 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Srinagar Map"
          src="https://www.google.com/maps?q=Srinagar%20Jammu%20Kashmir&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
