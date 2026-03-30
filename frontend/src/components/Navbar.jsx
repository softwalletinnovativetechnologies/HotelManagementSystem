import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-[#0f2f35]/80 backdrop-blur-md"
    >
      <div className="flex justify-between items-center px-10 py-4 text-white">
        {/* LEFT */}
        <div className="flex gap-6 text-sm">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
          <span>ROOMS</span>
        </div>

        {/* CENTER */}
        <h1 className="text-xl tracking-[5px] font-semibold">HOTEL</h1>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <span>CONTACT</span>

          <button className="bg-[#4fc3c8] px-4 py-2 rounded-full text-sm">
            LOGIN
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
