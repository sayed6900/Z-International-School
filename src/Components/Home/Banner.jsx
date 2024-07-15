import { Link } from "react-router-dom";
import kids1 from "../../../src/assets/image/kids1.jpg";
import kids2 from "../../../src/assets/image/kids2.jpg";


const Banner = () => {
  return (
    <div className="bg-blue-400 flex">
      <div className="w-1/2 lg:m-4 lg:p-8 space-y-4">
        <p className="text-white font-bold text-lg">Learn. Play. Explore</p>
        <h1 className="text-blue-800 font-extrabold text-5xl">
          A safe and joyful place for your lovely children
        </h1>
        <p className="text-lg text-white">
          Assalamu Alaikum! Welcome to Z International School, where academic
          excellence meets moral values. Located at Gulshan Residential Area in
          Dhaka, our English medium institution offers a holistic education,
          nurturing students to thrive academically and spiritually. Join us for
          a journey of learning and enlightenment.
        </p>
        <div className="flex justify-between ">
          <Link to='applyOnline'><button className="text-white btn btn-primary">
            Enroll Your Kid
          </button></Link>
          <div className="">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
            </div>
            <p>4.8 rating on Google</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative  lg:mt-12 lg:ml-8 lg:mr-8">
        <img className="w-2/3 rounded-2xl" src={kids1} alt="" />
        <img
          className="w-1/2 rounded-2xl absolute right-2 top-40"
          src={kids2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
