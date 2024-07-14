import { Link } from "react-router-dom";
import NavDrawer from "../../Pages/NavDrawer";


const Header = () => {
    return (
        <div>
        
         <div className="navbar bg-blue-800 text-white rounded">
         {/* Nav Drawer Button */}
         <NavDrawer></NavDrawer>
         
            {/* without Icon Button Navbar */}
  
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li className="hover:bg-blue-500 rounded-md"><Link to='/'>Home</Link></li>
      <li>
        <details className="hover:bg-blue-500 rounded-md z-50">
          <summary>About Us</summary>
          <ul className="bg-blue-600 text-white rounded-t-none p-2">
            <li className=" hover:text-orange-500 font-semibold"><Link to='vision'>1.Vision,Mission & Value</Link> </li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='whyUs'> 2. Why Choose Us</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='principalMsg'> 3. Principal Massage</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='ourTeam'> 4. Our Team</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='curriculum'>5. Curriculum</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''>6. History</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='campus'>7. Campus</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='events'>8. Upcoming Events</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='gallery'>9. Gallery</Link></li> 
           
          </ul>
        </details>
      </li>
      
      <li>
        <details className="hover:bg-blue-500 rounded-md z-50">
          <summary>Admission</summary>
          <ul className="bg-blue-600 text-white rounded-t-none p-2">
          <li className=" hover:text-orange-500 font-semibold"><Link to='admission'>1. A brief admission Procedure</Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link >2. Scholarship</Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link to='fees'>3. School fees</Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link >4. Withdrawal Policy</Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link >5.FAQ on Admissions </Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link to='howToApply' >6. How to Apply</Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link to='applyOnline'>7. Apply Online</Link></li> 
          <li className=" hover:text-orange-500 font-semibold"><Link to='onlinePayment' >8. Online Payment</Link></li> 
            
          </ul>
        </details>
      </li>
      <li className="hover:bg-blue-500 rounded-md"><a>Contact Us</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Achievements</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Key Information</a></li>
      <li className="hover:bg-blue-500 rounded-md"><Link to='policy'>Policies</Link></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Facilities</a></li>
      <li className="hover:bg-blue-500 rounded-md"><Link to='campus'>Request For A Tour</Link></li>
    </ul>
    <Link to='login'> <button className="btn btn-primary">Login</button> </Link>
  </div>
</div>
        </div>
    );
};

export default Header;