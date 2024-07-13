import media1 from "../../assets/image/media1.jpg";
import media2 from "../../assets/image/media2.jpg";
import media3 from "../../assets/image/media3.jpg";
import media4 from "../../assets/image/media4.jpg";
import media5 from "../../assets/image/media5.jpg";

const NewsMedia = () => {
  const images = [media1, media2, media3, media4, media5];

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:mt-20">
      {/* Part 1 */}
      <div >
        {/* left to right image */}
        <div className="card bg-base-100 shadow-xl lg:mb-20">
        <div className="overflow-hidden w-full lg:h-60 relative">
      <div className="move-right flex">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Moving ${index}`}
            className="lg:h-60 w-auto"
          />
        ))}
      </div>
    </div>
          <div className="card-body">
            <h2 className="card-title text-blue-700 font-bold">Introducing Our School Life </h2>
          </div>
        </div>
        {/* Upword text */}
        <h1 className="text-3xl font-bold text-blue-500 m-3">Latest updates</h1>
        <div className="overflow-hidden h-40">
          <div className="move-up ">
            <p className="text-lg font-bold underline text-blue-800">
              <li>
                {" "}
                <a href="">
                  Shubman Gill has been really good as captain: Washington Sunda
                  - India..{" "}
                </a>
              </li>
              <li>RU BCL dissolves hall, faculty, dept committees.. </li>
              <li>
                <a href="">
                  প্রধানমন্ত্রীর উপ-প্রেস সচিব ইমরুল কায়েস সবাইকে সতর্ক করে
                  ফেসবুকে নিজের ভেরিফায়েড অ্যাকাউন্টে একটি বার্তা দিয়েছেন..
                </a>
              </li>
              <li>
                <a href="">
                  Donors to hold about $90mln in pledges if Biden remains on
                  ticket
                </a>
              </li>
              <li>
                <a href=""></a> However, there are many other possibilities to
                get a little more out of your header, such as the ones explained
                below.
              </li>
              <li>
                <a href="">
                  টঙ্গীতে মসজিদ কমিটি নিয়ে দুই পক্ষের মারামারি, আহত ৫..
                </a>
              </li>
            </p>
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className=" p-2 m-2 space-y-3">
        <h1 className="text-3xl font-bold text-blue-500">News & Media</h1>
        <div className="flex">
          <img className="w-1/3" src={media1} alt="" />
          <p className="underline ml-2 text-blue-800">
            {" "}
            <a href="">-Glenrich Newsletter – February 2024</a>
          </p>
        </div>
        <div className="flex">
          <img className="w-1/3" src={media2} alt="" />
          <p className="underline ml-2 text-blue-800">
            {" "}
            <a href="">
              জলবায়ু পরিবর্তনের কারণে নয়, বরং মানুষের সৃষ্ট চাপের কারণে পৃথিবী
              থেকে দৈত্যাকার তৃণভোজী প্রাণীর সংখ্যা কমতে শুরু করে বলে জানিয়েছেন
              গবেষকরা..
            </a>
          </p>
        </div>
        <div className="flex">
          <img className="w-1/3" src={media3} alt="" />
          <p className="underline ml-2 text-blue-800">
            {" "}
            <a href="">
              However, there are many other possibilities to get a little more
              out of your header, such as the ones explained below.
            </a>
          </p>
        </div>
        <div className="flex">
          <img className="w-1/3" src={media4} alt="" />
          <p className="underline ml-2 text-blue-800">
            {" "}
            <a href="">Don't Forget About Aesthetics.</a>
          </p>
        </div>
        <div className="flex">
          <img className="w-1/3" src={media5} alt="" />
          <p className="underline ml-2 text-blue-800">
            {" "}
            <a href="">
              Brainstorm Ideas. Start by thinking about what you want to
              communicate in the newsletter.
            </a>
          </p>
        </div>
      </div>

      {/* Part 3 */}
      <div className="w-1/3">
        <div className="hero bg-blue-200 ">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-blue-500">
                ADMISSION QUERY
              </h1>
            </div>
            <div className="card bg-blue-100 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Parents Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Student Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Student's Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    placeholder="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Massage</span>
                  </label>
                  <input
                    type="text"
                    placeholder="text"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;
