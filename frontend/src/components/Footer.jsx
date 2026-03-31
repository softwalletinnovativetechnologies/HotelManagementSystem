import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#0f2027] to-[#203a43] text-white px-6 md:px-10 py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* 🔥 LEFT */}
        <div>
          <h2 className="text-xl tracking-[4px] font-semibold mb-2">HOTEL</h2>
          <p className="text-gray-300 text-sm">
            Luxury stays. Premium experience.
          </p>
        </div>

        {/* 🔥 CENTER LINKS */}
        <div className="flex gap-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/rooms" className="hover:text-white transition">
            Rooms
          </Link>
          <Link to="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* 🔥 RIGHT SOCIAL */}
        <div className="flex gap-4 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-[#4fc3c8] transition" />
          <FaInstagram className="cursor-pointer hover:text-[#4fc3c8] transition" />
          <FaTwitter className="cursor-pointer hover:text-[#4fc3c8] transition" />
        </div>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} Hotel. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
