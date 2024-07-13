import kids4 from '../../assets/image/kids4.jpg'
import kids5 from '../../assets/image/kids5.jpg'
import kids6 from '../../assets/image/kids6.jpg'

const AgeSpisific = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <p className="font-bold">ACADEMICS</p>
        <h1 className="text-5xl font-bold text-blue-700">
          Age-specific support <br />
          for every stage
        </h1>
      </div>
      {/* cards */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-14">
        {/* card 1 */}
        <div className="card glass w-96">
          <figure>
            <img
              src={kids4}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-500 font-bold">PRE SCHOOL</h2>
            <p>We welcome children from 3 to 6 in the Preschool Program to participate in the classroom from Playgroup (Reception 1), Nursery (Reception 2) and Kindergarten (Year 1). Our children in Preschool (Early Years) are exposed to different areas of learning that includes communication and language, personal, social and emotional development, physical development, literacy, mathematics, understanding the world, expressive arts and design. Learning process is pursued through various fun and playful activities to develop the sense of spirituality and to build the foundation for academic success.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card glass w-96">
          <figure>
            <img
              src={kids5}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-500 font-bold">PRIMARY SCHOOL</h2>
            <p>In the Primary School program children can enroll from Year 2 to Year 6 (Grade 1 to Grade 5). To continue the development of student’s academic success Reverie School keeps on nurturing the innate curiosity and learning skills of each child. We expose students to a wide range of subject areas to keep them motivated to become creative, analytical and continue to achieve academic success. Students are taught English, Bangla, Maths, Science, Computing, Global Citizenship, Islam, Arabic, Tahfeez (reading and memorizing surahs from the Quran), creative art and physical education.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card glass w-96">
          <figure>
            <img
              src={kids6}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-500 font-bold">MIDDLE SCHOOL</h2>
            <p>In the Lower Secondary School program are taught to the children in Year 7 (Grade 6), Year 8 (Grade 7) and Year 9 (Grade 8) in order to prepare them for IGCSE O & A Levels. The Lower Secondary School Program provides a safe place for students to meet, individually or in small groups, to focus on social and emotional development, and to seek guidance from school counselors. Students increase their levels of independence in emotional self-regulation, self-advocacy, and interpersonal skills by continuing their learning journey in English, Bangla, Maths, Physics, Chemistry, Biology, Computing, Global Citizenship, Islam, Arabic, Tahfeez (reading and memorizing surahs from the Quran), creative art and physical education.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeSpisific;
