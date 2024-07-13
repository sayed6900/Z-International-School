import media5 from "../../assets/image/media5.jpg";

const PrincipalMsg = () => {
  return (
    <div className="flex">
      {/* left Div */}
      <div className="m-6">
        <img className="border-4 border-blue-900 rounded-lg" src={media5} alt="Principal" />
        <p className="font-bold">
          <h1 className=" text-2xl pt-4 text-blue-700">Mohammad Anisur Rahaman</h1>
          <p>
            Head of School <br />Z International School
          </p>
        </p>
      </div>

      {/* Right Div */}
      <div className="m-6">
        <h1 className="font-bold text-blue-600">Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu</h1>
        <p>
          On behalf of the AIS family, I extend a very warm welcome to you. We
          started our journey in pursuit of excellence in April 2015 and it has
          been a wonderful experience so far; one that will be cherished by all
          associated with this institution. <br /> We passionately believe in
          everything that this institution stands for and its promise to be a
          trendsetter in the field of education. An education of the highest
          quality is the greatest gift that parents can give to their children.
          The next global generation will need exceptional academic and
          intellectual creativity to take on positions of leadership and address
          the many challenges that face our world. Given this, it is vitally
          important that the leading schools in the 21st Century provide a
          genuinely holistic international education to prepare learners for the
          responsibilities they will face in their lives. <br /> The curriculum at AIS
          is tailored to meet the needs of the hour and sensitive to learners of
          different types. 
          <p className="pt-2 pb-2">A plethora of academic and co-curricular activities
          offers the opportunity to all students to discover and re-discover
          facets of their personalities. <br /> Cultural programmes and observance of
          international and national days bring out the students’ intellectual
          potentials and are a platform for showcasing remarkable talent. <br />
          We are pledged to live up to the rising expectations of parents and setting a benchmark in the field of quality education.</p>
           I conclude my message with an invitation to you to visit the AIS campus; where teaching and learning is simple and enjoyable, and most importantly, within the reach of students. <br />

“May Allah guide us to the straight path”. Aameen
        </p>
      </div>
    </div>
  );
};

export default PrincipalMsg;
