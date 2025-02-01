import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

function OurService() {
  return (
    <div>
      <h1 className="text-3xl mt-14 md:text-4xl font-bold text-center text-black mb-12">
        Meet Our <span className="text-[#1CC674] "> Amazing Features</span>
      </h1>
      <div className="relative w-full py-10 px-4 mt-12">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/09/10/88114-602317841_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.img
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-2.png"
                  alt="Play Time"
                  whileHover={{
                    y: -5, // Small movement to prevent chora
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Play Time</h3>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.img
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-3.png"
                  alt="Daycare"
                  whileHover={{
                    y: -5, // Small movement to prevent chora
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Daycare</h3>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.img
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-1.png"
                  alt="Learning"
                  whileHover={{
                    y: -5, // Small movement to prevent chora
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Learning</h3>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.img
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-4.png"
                  alt="Outdoors"
                  whileHover={{
                    y: -5, // Small movement to prevent chora
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Outdoors</h3>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.img
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-5.png"
                  alt="Healthy Meals"
                  whileHover={{
                    y: -5, // Small movement to prevent chora
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Healthy Meals</h3>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.img
                  className="w-16 h-16 object-contain transition-transform duration-300"
                  src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-6.png"
                  alt="Events"
                  whileHover={{
                    y: -5, // Small movement to prevent chora
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Events</h3>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;

