const SchoolTiming = () => {
  return (
    <div className="mt-14">
      <h1 className="text-center text-5xl font-bold text-blue-700">
        School Timing
      </h1>
      {/* Time table */}
      <div className="mt-10 border-2 border-blue-800 p-8 rounded-lg">
        <div className="overflow-x-auto">
        <h1 className="text-center mb-5 text-2xl font-bold">For Early Years (Playgroup, Nursery, Kindergarten)</h1>
        {/* Table no 1 */}
          <table className="table bg-blue-300 text-base">
            {/* head */}
            <thead>
              <tr className="bg-blue-500 text-white text-base">
                <th>Class </th>
                <th>First Shift </th>
                <th>Second Shift </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="">
                
                <td>Reception 1(Playgroup) </td>
                <td>9:00 am – 11:15 am  </td>
                <td> 11:30 am – 1:45 pm </td>
              </tr>
              {/* row 2 */}
              <tr>
               
                <td>Reception 2(Nursery) </td>
                <td>8:15 am – 11:40 am </td>
                <td>11:15 am – 2:30 pm </td>
              </tr>
              {/* row 3 */}
              <tr>
                
                <td>Year 1(Kindergarten)</td>
                <td>8:15 am – 12:20 pm </td>
                <td>Not applicable </td>
              </tr>
            </tbody>
          </table>
          {/* Table no 2 */}
          <h1 className="text-center mb-5 mt-10 text-2xl font-bold">For Primary & Middle Years (Grades 1-6)</h1>
          <table className="table bg-blue-300 text-base">
            {/* head */}
            <thead>
              <tr className="bg-blue-500 text-white text-base">
                <th>Class </th>
                <th>School Timing  </th>
                <th className="text-yellow-400">Salah Timing  </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="">
                
                <td>Year 2-3(Grades 1-2)  </td>
                <td>8:15 am – 1:45 pm  </td>
                <td> 1:25 pm – 1:40 pm  </td>
              </tr>
              {/* row 2 */}
              <tr>
               
                <td>Year 4-5(Grades 3-4) </td>
                <td>8:15 am – 2:00 pm  </td>
                <td>1:25 pm – 1:40 pm  </td>
              </tr>
              {/* row 3 */}
              <tr>
                
                <td>Year 6-7(Grades 5-6) </td>
                <td>8:15 am – 2:50 pm  </td>
                <td>1:25 pm – 1:40 pm  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SchoolTiming;
