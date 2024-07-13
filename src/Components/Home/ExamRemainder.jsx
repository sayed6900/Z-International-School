import { useEffect, useState } from "react";


const ExamRemainder = () => {
    const initialTime = 10 * 60 * 60 + 24 * 60 + 60; // 10 hours, 24 minutes, and 60 seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div >
        <div className=" p-4 border-blue-300 border-4 rounded w-72 justify-center bg-blue-800 text-white"> 
        <h1 className="font-bold text-2xl">Final Exam- 2024 </h1> 
      <span className="countdown font-mono text-3xl">
        <span style={{ "--value": hours }}></span>:
        <span style={{ "--value": minutes }}></span>:
        <span style={{ "--value": seconds }}></span>
      </span>
        </div>
    </div>
    );
  };

export default ExamRemainder;