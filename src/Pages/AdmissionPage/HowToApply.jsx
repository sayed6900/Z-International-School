import { Link, NavLink } from "react-router-dom";
import howToapply from "../../assets/image/howtoapply.png";

const HowToApply = () => {
  return (
    <div>
      <img className="h-60 w-full" src={howToapply} alt="" />
      {/* 1st part flex 2 items */}
      <div className="flex mt-5">
        <div className="space-y-4 w-1/2">
          <h1 className="text-blue-800 font-bold text-3xl">Download Form</h1>
          <p className="pb-6">Download form & submit at our office</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500 text-white">
            Download Form
          </button>
        </div>
        <div className="flex">
          <div className="h-32 border-l-2 border-blue-300"></div>
          <div className="space-y-4 ml-10">
            <h1 className="text-blue-800 font-bold text-3xl">Online Method</h1>
            <p className="pb-6">
              Click <span className="text-blue-600 font-bold">Apply Now</span>
              button to apply online
            </p>
            <Link to='/applyOnline'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 bg-blue-500 text-white">
            Apply Now
          </button></Link>
          </div>
        </div>
      </div>
      {/* 2nd part Grid 6 steps */}
      <div>
        <h1 className="text-xl font-bold mt-6">
          If you have download the form go through the process below :
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-14 mt-5">
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-3xl font-bold text-blue-500">1.</span>{" "}
              Fillup Admission Form
            </h1>
            <p>
              Admission Form for every applicant requires to be collected to
              begin the Admission process. Admission Form can be collected on
              payment of an application fee of BDT 500 (BDT Five Hundred Only)
              from Admissions Office directly or you may apply online.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-3xl font-bold text-blue-500">2.</span>{" "}
              Submit The Form
            </h1>
            <p>
              Applicant should fill in the admission form completely, leaving no
              fields blank on the form. <br />
              The completed Admission Form is to be submitted to the Admissions
              Office or directly Online. <br />
              Please attach all required documents with completed Admission
              Form.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-3xl font-bold text-blue-500">3.</span>{" "}
              Admission Assessment
            </h1>
            <p>
              An Admission Assessment will be conducted for all applicants on
              receiving complete Admission applications. <br />
              Assessments will be Oral for Playgroup and Nursery. <br />
              Assessments may be Oral and/or Written for all Admission
              applicants.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-3xl font-bold text-blue-500">4.</span>{" "}
              Assessment Result & Gather Necessary Documents
            </h1>
            <p>
              If Admission Assessment results are positive, based on Oral and
              Written processes, applicant will be informed and requested to
              complete Admission Process. Remaining documentation submissions
              must be completed at this point.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-3xl font-bold text-blue-500">5.</span>{" "}
              Payment Process
            </h1>
            <p>
              Online Payment Gateway <br />
              Online Banking <br />
              bKash <br />
              Cash transactions at the Admissions Office
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              <span className="text-3xl font-bold text-blue-500">6.</span>{" "}
              Admission
            </h1>
            <p>
              Admission process should be completed within 10 working days of
              receiving Admission Confirmation.
            </p>
          </div>
        </div>
      </div>
      {/* 3rd part Address & payment */}
      <div className="space-y-5">
      <hr className="border-t-2 border-blue-400 mt-10" />
      <div className="flex space-y-5 m-4">
            <div className="w-1/2 m-5">
                <h1 className="text-3xl font-bold text-blue-800 mb-5">Payment Procedures</h1>
                <p>In case of Online Payments or bKash and Nagad payment, please remember to forward a copy or image of your payment receipt via email to info@guidance.com.bd and include Student ID, Class and Parents’ contact information.</p>
                <p>Account Name : Guidance International School <br />
Account No. : 0015 11100007641 <br />
Bank : Southeast Bank Ltd. <br />
Branch : Kawran BazarOnline Banking Method</p>
            </div>
            <div className="m-5">
                <h1 className="text-3xl font-bold text-blue-800 mb-5">Admission Office Address</h1>
                <ul>
                    <li>Office Phone No.         : 48812164, 48812165, +8801322547575</li>
                    <li>Email                             : admission@guidance.edu.bd</li>
                    <li>Address : House no. 06, Road no. 24, Gulshan 1, Dhaka-1212, Bangladesh</li>
                </ul>
            </div>
      </div>
      </div>
    </div>
  );
};

export default HowToApply;
