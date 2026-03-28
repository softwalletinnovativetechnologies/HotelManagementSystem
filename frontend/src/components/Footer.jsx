import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

function Footer() {
  return (
    <div className="bg-[#0f2f35] text-white pt-20 pb-10 px-10">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl mb-4">HOTEL</h2>
          <p className="text-gray-300">
            Experience luxury comfort with premium services.
          </p>
        </div>

        <div>
          <h3 className="mb-4">Quick Links</h3>
          <p>Home</p>
          <p>Rooms</p>
          <p>Contact</p>
        </div>

        <div>
          <h3 className="mb-4">Contact</h3>
          <p>+91 9876543210</p>
          <p>hotel@email.com</p>
        </div>

        <div>
          <h3 className="mb-4">Subscribe</h3>
          <input
            placeholder="Enter Email"
            className="p-2 w-full rounded bg-white text-black"
          />
        </div>
      </div>

      <p className="text-center mt-10 text-gray-400">
        © 2026 Hotel. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
