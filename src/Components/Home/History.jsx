import kidsCover from "../../assets/image/kidsCover.jpg";

const History = () => {
  return (
    <div className="relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/X5G1WBt/kids-Cover.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-blue-400 text-5xl font-bold">History of our school</h1>
            <p className="mb-5 text-white">
              Z International School is recognized by the Bangladesh Ministry of
              Education and authorized by British Council and Edexcel as an
              English medium educational institution for both Primary and
              Secondary Sections. The school established in 2002 is situated at
              Gulshan in Dhaka. The School, surrounded by peaceful environment,
              which gives pleasures to children, offers education from Play to A
              Level.
            </p>
            {/* Statistics */}
            <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div className="stat-title font-bold">Founded</div>
    <div className="stat-value">2000</div>
    <div className="stat-desc">IGCSE & GCE Curriculum under Edexcel.</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title font-bold">Teachers</div>
    <div className="stat-value">40+</div>
    <div className="stat-desc">↗︎ 30 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title font-bold">Students</div>
    <div className="stat-value text-blue-600">4,200+</div>
    <div className="stat-desc">↗︎ 200 (20%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title font-bold">Staffs</div>
    <div className="stat-value">50+</div>
    <div className="stat-desc">↘︎ 20 (14%)</div>
  </div>
</div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center items-center -bottom-10 left-72 bg-blue-400">
        <h1 className="text-lg font-bold p-8 text-white ">Start your Beautiful & Bright Future From Here</h1>
        <button className="btn btn-primary m-8">Apply Now</button>
      </div>
    </div>
  );
};

export default History;
