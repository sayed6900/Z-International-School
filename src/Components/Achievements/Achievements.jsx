import achievement1 from "../../assets/New images/achievement1.jpg";
import achievement2 from "../../assets/New images/achievement2.jpg";
import achievement3 from "../../assets/New images/achievement3.jpg";
import achievement4 from "../../assets/New images/achievement4.jpg";
import achievement5 from "../../assets/New images/achievement5.png";
import achievement6 from "../../assets/New images/achievement6.jpg";
import kids3 from '../../assets/image/kids3.jpeg'


const Achievements = () => {
  const images = [
    achievement1,
    achievement2,
    achievement3,
    achievement4,
    achievement5,
    achievement6,
  ];
  return (
    <div>
      {/* Moving Image */}
      <div className="card bg-base-100 shadow-xl lg:mb-10">
        <div className="overflow-hidden w-full relative flex justify-center ">
          <div className="move-right-fast ">
           <div className="image-container space-x-1">
           {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Moving ${index}`}
                className="lg:max-h-96 w-auto"
              />
            ))}
           </div>
          </div>
        </div>
        <div className="card-body text-center">
          <h2 className="card-title text-blue-700 text-4xl font-bold">
            Our Achievements
          </h2>
        </div>
      </div>

      {/* Text details 1 */}
      <div className="hero bg-base-200 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={kids3}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="mx-10 space-y-3">
    <h1 className="text-4xl font-bold text-blue-800">Outstanding Cambridge Results</h1>
        <p className="font-bold">
          Over 200 International and National awards for educational excellence.
          7 Top in the World, 27 Top in the Country, and 5 High Achievement
          Outstanding Cambridge Learners Award in IGCSE, AS, A, and O Level.
        </p>
        <p>
          <h1 className="font-bold">Class of 2023:</h1>
          <ul className="list-disc list-inside pl-8 space-y-2 font-semibold">
            <li>
              10 students secured 6 or more A* in the IGCSE Level Board Exam.
            </li>
            <li>4 IGCSE students were conferred the prestigious Cambridge International Certificate in Education (ICE) award with 3 distinctions and 1 merit.</li>
            <li>16 IGCSE & 6 A Level student have achieved 90% and more marks.</li>
            <li>12 students secured 3 or more A* in the A Level Board Exam.</li>
            <li>35 IGCSE students and 20 A Level students achieved eligibility for the Daily Star award.</li>
          </ul>
        </p>
    </div>
  </div>
</div>

      {/* Text details 2 */}
      <div className="hero bg-base-200 my-6 rounded-lg">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={achievement4}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="mx-10">
      <h1 className="text-4xl font-bold">World Scholar's Cup</h1>
      <p className="pt-4 font-semibold">
      Glenrich Dhaka shines at the WORLD Scholars’ Cup Tournament of Champions at Yale University! Five outstanding students from our school showcased their brilliance in debates, discussions, and quiz bowls on the global theme ‘Reconstructing the Past’.
      A remarkable haul of 10 Gold, 21 Silver medals, and a Trophy! Ruwayfi Tasawwar from Grade 9 emerged as the Best Scholar from Bangladesh, earning 6 Gold, 7 Silver Medals, and the prestigious Best Scholar trophy.
      </p>
    </div>
  </div>
</div>

{/* Text details 3 */}
<div className="hero bg-base-200 mb-6 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={achievement5}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="mx-10 space-y-3">
    <h1 className="text-4xl font-bold text-blue-800">STS Chef Minister 2024</h1>
        <p className="font-bold">
        This month-long event consists of one cooking workshop and the gala round Grand Finale. Attendees will receive free professional certificates after the cooking workshop, which will be held in person on 6th February 2024 at 11:00 AM at the DPS STS Senior School campus. The address of DPS STS Senior School is Plot ED-01, Road 01, Sector 15, Uttara Model Town, Dhaka. 
        </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Achievements;
