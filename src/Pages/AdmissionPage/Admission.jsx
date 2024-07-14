const Admission = () => {
  return (
    <div className="flex">
      {/* left side steps */}
      <div className="w-2/3">
        <div className="mt-4">
          <p>
            Once the admission opening date has been decided, Parents can call,
            email for the admission information or may come to the School Campus
            & complete the prescribed query form regarding admission.
          </p>
          <h2 className="text-blue-700 font-bold text-xl mt-2">Steps : </h2>
        </div>

        {/* Steps Row */}
        <div >
          <ul className="steps steps-vertical">
            <li className="step step-primary">Issuance of Prospectus</li>
            <li className="step step-primary">Parent to meet admission office to get details of admission procedure, fee schedule etc. After approval of MD & CEO/Principal/Vice Principal, parents can obtain the prescribed admission form from the Principal’s Office at a particular cost.</li>
            <li className="step step-error">Oral Interaction (with parents and student): Pre-Primary</li>
            <li className="step step-info">Written test for KG-I to Class VIII.</li>
            <li className="step step-info"> Admission orders – An SMS of admission given to the parents</li>
            <li className="step step-info">Fees to be deposited in the Accounts Department or in mentioned Bank</li>
            <li className="step">Parent has to fill up the required details to complete the admission form and submit the form. Recent passport size photograph of student & parent, a copy of child’s birth certificate, recent report cards photocopy must be submitted along with admission form to the Admission Office.</li>
            <li className="step step-error">Uniform, books, stationery etc. to be arranged, by the parents according to the given instructions.</li>
            <li className="step">Join AIS orientation & be a proud member of AIS Family.</li>
          </ul>
        </div>

        <div></div>
      </div>

      {/* Right side Table */}
      <div className=" lg:ml-8 lg:mt-8">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="font-bold text-lg text-white bg-blue-500">
        
        <th>Class</th>
        <th>Age</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td> Playgroup</td>
        <td> 3+ to below 4</td>
        
      </tr>
      {/* row 2 */}
      <tr className="hover">
        
        <td> Nursery</td>
        <td> 4+ to below 5</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <td> Pre  KG</td>
        <td> 5+ to below 6</td>
      </tr>
      <tr>
        <td>  KG</td>
        <td>  6+ to below 7</td>
      </tr>
      <tr>
        <td>  Grade: 1</td>
        <td>  7+ to below 8</td>
      </tr>
      <tr>
        <td>  Grade: 2</td>
        <td>  8+ to below 9</td>
      </tr>
      <tr>
        <td>  Grade: 3</td>
        <td>  9+ to below 10</td>
      </tr>
      <tr>
        <td>  Grade: 4</td>
        <td>  10+ to below 11</td>
      </tr>
      <tr>
        <td>  Grade: 5</td>
        <td>  11+ to below 12</td>
      </tr>
      <tr>
        <td>  Grade: 6</td>
        <td>  12+ to below 13</td>
      </tr>
      <tr>
        <td>  Grade: 7</td>
        <td>  13+ to below 14</td>
      </tr>
      <tr>
        <td>  Grade: 8</td>
        <td>  14+ to below 15</td>
      </tr>
      <tr>
        <td>  Grade: 9</td>
        <td>  15+ to below 16</td>
      </tr>
      <tr>
        <td>  Grade: 10</td>
        <td>  16+ to below 17</td>
      </tr>
      <tr>
        <td>  Grade: 11</td>
        <td>  17+ to below 18</td>
      </tr>
      <tr>
        <td>  Grade: 12</td>
        <td>  18+ to below 19</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Admission;
