
import fees from '../../assets/image/schoolFee.jpg'

const Fees = () => {
    return (
        <div>
           <div className='flex items-center justify-center'>
           <img className='h-60' src={fees} alt="" />
           </div>
           
            <div>
            <div className="overflow-x-auto lg:my-10 lg:mx-40">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='font-bold text-lg bg-blue-600 text-white'>
        
        <th>Classes</th>
        <th>Annual Admission  Fee</th>
        <th>Monthly Tuition Fee</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Playgroup</td>
        <td>120,000</td>
        <td>15,000</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Nursery</td>
        <td>120,000</td>
        <td>16,000</td>
      </tr>
      {/* row 3 */}
      <tr>
        
        <td>KG-1</td>
        <td>120,000</td>
        <td>17,000</td>
      </tr>
      <tr>
        
        <td>KG-2</td>
        <td>120,000</td>
        <td>17,000</td>
      </tr>
      <tr>
        
        <td>G1 to G4</td>
        <td>140,000</td>
        <td>18,000</td>
      </tr>
      <tr>
        
        <td>G5 to G6</td>
        <td>150,000</td>
        <td>12,000</td>
      </tr>
      <tr>
        
        <td>G7 to G8</td>
        <td>160,000</td>
        <td>22,000</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Fees;