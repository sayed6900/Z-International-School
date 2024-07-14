import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import principal from '../../assets/image/media5.jpg'
import { useLoaderData } from "react-router-dom";
import TeachersCard from "../../Others/TeachersCard";

const OurTeam = () => {
    
    const [isFlipped, setIsFlipped] = useState(false);
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  const teachers = useLoaderData()
  console.log(teachers)

    return (
        <div>
        <div>
      <h1 className="text-center font-bold text-3xl text-black m-3">Principal </h1>
      </div>
            {/* card 1 */}
      <div className="flex justify-center items-center ">
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
                <img className="  " src={principal} alt="Vision" />
                <div className="flex p-3 bg-blue-200">
                <h1 className="text-black m-2">Mohammad Anisur Rahaman  </h1>
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
                <h3 className="text-xl font-bold p-2 border-4 text-black text-center rounded-xl border-blue-200">
                Mohammad Anisur Rahaman Shohagh
                Head of School
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div>
      <h1 className="text-center font-bold text-3xl text-black m-6">Other Respected Teachers </h1>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4">
      
        {
            teachers.map((teacher,idx)=><TeachersCard key={idx} teacher={teacher} ></TeachersCard> )
        }
      </div>
        </div>
    );
};

export default OurTeam;