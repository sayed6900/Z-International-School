import applyOnline from "../../assets/image/Apply-Online-Now-Banner.jpg";

const ApplyOnline = () => {
  return (
    <div>
      <img className="w-full h-60" src={applyOnline} alt="" />
      {/* main form */}
      <div>
        <div className="hero bg-blue-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
              <form className="card-body">
                <h1 className="text-4xl text-blue-800 font-bold">
                  Online Admission Form
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Student Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Full name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    placeholder="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {/* Religion pick */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Religion</span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Muslim</option>
                    <option>Hindu</option>
                    <option>Buddist</option>
                    <option>Cristian</option>
                    <option>Not Applicable</option>
                  </select>
                </label>
                {/* Upload Photo */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Upload Photo</span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </label>
                {/* Father & mother Information */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Father Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Full name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mother Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Full name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Address */}
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Present Address</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Present Address"
                  ></textarea>
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Permanent Address</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Permanent Address"
                  ></textarea>
                </label>
                <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Submit Button */}
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

export default ApplyOnline;
