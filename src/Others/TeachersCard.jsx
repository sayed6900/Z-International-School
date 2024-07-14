import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TeachersCard = ({teacher}) => {

    const [isFlipped, setIsFlipped] = useState(false);
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };
    const {name,pic,education , research, post}= teacher
    return (
        <div>
            <div className=" ">
        <motion.div
          className="relative w-64 h-72"
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
                <img className="  " src={pic} alt="Vision" />
                <div className="flex p-3 bg-blue-200">
                <h1 className="text-black m-2">{name}  </h1>
                <h1 className="text-blue-800 items-center justify-center"> <FaArrowAltCircleRight /> </h1>
                </div>
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
                <h3 className=" font-bold p-2 border-4 text-black text-center rounded-xl border-blue-200">
                <p>Name: {name} </p>
                <p>Education: {education} </p>
                <p>Post: {post} </p>
                <p>Research: {research} </p>
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
        </div>
    );
};

export default TeachersCard;