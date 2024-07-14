import campus1 from '../../assets/image/campus1.jpg'
import campus2 from '../../assets/image/campus2.jpg'
import campus3 from '../../assets/image/campus3.jpeg'
import campus4 from '../../assets/image/campus4.jpg'
import campus5 from '../../assets/image/campus5.jpg'

const Campus = () => {
  return (
    <div>
   <h1 className='font-bold text-3xl text-blue-800 text-start mt-2'>Welcome To Z international School</h1>
      <div className="flex">
        {/* Left Side Pic */}
        <div className="w-1/2 mt-16">
        <div className="carousel w-full lg:h-80 rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={campus1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={campus2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={campus3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={campus4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
        </div>
        {/* Right side Form */}
        <div>
        <div className="ml-6 mb-10">
        <div className="hero bg-blue-200 rounded-xl">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-blue-700">
                Request on Campus Tour
              </h1>
            </div>
            <div className="card bg-blue-100 shadow-2xl">
              <form className="card-body grid grid-cols-2">
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
                    <span className="label-text">Date</span>
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
                    type="text"
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
                
                <div className=" mt-6">
                <button className="btn btn-primary ml-40 pl-10 pr-10">Submit</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
