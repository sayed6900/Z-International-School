import kid3 from "../../../src/assets/image/kids3.jpeg";

const AboutUs = () => {
  return (
    <div className="flex bg-blue-300 lg:pt-10">
      <div className="w-1/2 ">
        <img className="m-6 border-2 border-black rounded-xl " src={kid3} alt="Bounce" />
      </div>
      <div className="w-1/2  lg:ml-12 lg:mr-8 lg:p-8 space-y-4">
        <p className="text-white font-bold text-lg"> About us</p>
        <h1 className="text-blue-600 font-extrabold text-4xl">Z International School is admitting students from Playgroup to Grade 7</h1>
        <p className=" text-white">
          Z International School follows the Pearson Edexcel curriculum and intends to
          deliver excellent educational programs in the following Key Learning
          Areas: English, Mathematics, Science, Technology, Global Citizenship,
          Creative Arts, Personal Development, Health and Physical Education as
          well as lessons in Quran, Islamic Studies and Arabic Language classes.
          Here at Reverie School, we aim to help our precious children to think
          and act in ways that are truly inspiring.
        </p>
        <button className="btn btn-outline btn-primary">Know more about us</button>
      </div>
    </div>
  );
};

export default AboutUs;
