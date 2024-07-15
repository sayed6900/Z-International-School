import building from "../../assets/New images/building.jpg";
import robo from "../../assets/New images/robotics-classroom.jpg";
import music from "../../assets/New images/music-hero.jpg";
import library from "../../assets/New images/library.jpg";
import L from "../../assets/New images/language.jpeg";
import football from "../../assets/New images/football.jpg";
import app from "../../assets/New images/app.jpg";

const Facilities = () => {
  return (
    <div>
      <div>
        <div className="hero bg-cyan-100 ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={building} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl text-blue-800 font-bold ml-6">
                World Class Facilities
              </h1>
              <p className=" m-6">
                We are proud of our two custom-built campuses. These venues
                allow us to provide safe and comfortable environments for
                learning, as well as state-of-the-art infrastructure that rivals
                schools at a global level. Each campus has been carefully
                designed and provides numerous facilities for our faculty and
                students
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid my-10 sm:grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <div className="card glass  bg-gray-100">
            <figure>
              <img className="lg:h-52 rounded-md"
                src={robo}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dedicated Labs</h2>
              <ul className="list-disc pl-5">
                <li>ICT labs</li>
                <li>Robotics Lab</li>
                <li>Science Art lab</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass bg-red-100">
            <figure>
              <img className="lg:h-52 rounded-md"
                src={music}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Music, Dance & Drama</h2>
              <ul className="list-disc pl-5">
                <li>Art Competitions</li>
                <li>Dance Programs</li>
                <li>Drama Week</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass  bg-blue-100">
            <figure>
              <img className="lg:h-52 rounded-md"
                src={library}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">E-Library</h2>
              <p> An electronic library has, not only text data but also sound, graphics, and motion video, in the form of digital data.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass bg-purple-100">
            <figure>
              <img className="lg:h-52 rounded-md"
                src={L}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Language Club</h2>
              <ul className="list-disc pl-5">
                <li>German</li>
                <li>French</li>
                <li>Chinese</li>
                <li>British Native</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass lg:h-auto bg-yellow-100">
            <figure>
              <img className=" lg:h-52 rounded-md"
                src={football}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Indoor & Outdoor Sports</h2>
              <p>In today’s environmental constraints, students are mostly relegated to indoors and indoor activities as part of their schooling..</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card glass bg-stone-300">
            <figure>
              <img className="lg:h-52 rounded-md"
                src={app}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Parent Mobile App</h2>
              <ul className="list-disc pl-5">
                <li>Daily Update of students</li>
                <li>Massage Alert</li>
                <li>Easy Communication with Teachers</li>
                <li>Exam updates & results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
