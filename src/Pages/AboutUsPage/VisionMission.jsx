import { useState } from "react";
import { motion } from "framer-motion";
import vision from "../../assets/image/Vision.jpg";
import mission from "../../assets/image/mission.jpg";
import values from "../../assets/image/values.jpg";

const VisionMission = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3">
      {/* card 1 */}
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          className="relative w-64 h-96"
          onHoverStart={handleHover}
          onHoverEnd={handleHover}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-lg shadow-lg"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.8s",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <motion.div
              className="absolute w-full h-full  text-white flex items-center justify-center rounded-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                <img className="lg:h-96 rounded-xl" src={vision} alt="Vision" />
              </div>
            </motion.div>
            <motion.div
              className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="p-4">
              <h1 className="text-2xl font-bold text-center text-black">Vision</h1>
                <h3 className="text-xl font-bold p-2 border-4 text-orange-700 text-center rounded-xl border-blue-700">
                  Our Vision is to prepare students to contribute to and
                  succeed in a rapidly changing society, enabling them to help
                  make the world a better place.
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Card 2 */}
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          className="relative w-64 h-96"
          onHoverStart={handleHover}
          onHoverEnd={handleHover}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-lg shadow-lg"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.8s",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <motion.div
              className="absolute w-full h-full  text-white flex items-center justify-center rounded-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                <img className="lg:h-96 rounded-xl" src={values} alt="Values" />
              </div>
            </motion.div>
            <motion.div
              className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="p-4">
              <h1 className="text-2xl font-bold text-center text-black">Values</h1>
                <h3 className="text-xl font-bold p-2 border-4 text-yellow-500 text-center rounded-xl border-blue-700">
                We are kind and compassionate to everyone. We understand the importance of helping others and we show gratitude towards those who are kind to us.
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Card 3 */}
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          className="relative w-64 h-96"
          onHoverStart={handleHover}
          onHoverEnd={handleHover}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-lg shadow-lg"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.8s",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <motion.div
              className="absolute w-full h-full  text-white flex items-center justify-center rounded-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                <img className="lg:h-96 rounded-xl" src={mission} alt="Vision" />
              </div>
            </motion.div>
            <motion.div
              className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="p-4">
              <h1 className="text-2xl font-bold text-center text-black">Mission</h1>
                <h3 className="text-xl font-bold p-2 border-4 text-center rounded-xl border-blue-700">
                Our mission is to prepare students to contribute to and succeed in a rapidly changing society, enabling them to help make the world a better place.
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
