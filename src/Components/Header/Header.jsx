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
        <details className="hover:bg-blue-500 rounded-md">
          <summary>About Us</summary>
          <ul className="bg-blue-600 text-white rounded-t-none p-2">
            <li className=" hover:text-orange-500 font-semibold"><Link to='vision'>1.Vision,Mission & Value</Link> </li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='whyUs'> 2. Why Choose Us</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to='principalMsg'> 3. Principal Massage</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''> 4. Our Team</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''>5. Curriculum</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''>6. History</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''>7. Campus</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''>8. Upcoming Events</Link></li> 
            <li className=" hover:text-orange-500 font-semibold"><Link to=''>9. Gallery</Link></li> 
           
          </ul>
        </details>
      </li>
      
      <li>
        <details className="hover:bg-blue-500 rounded-md">
          <summary>Admission</summary>
          <ul className="bg-blue-600 text-white rounded-t-none p-2">
          <li className=" hover:text-orange-500 font-semibold"><a>1. A brief admission Procedure</a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>2. Scholarship</a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>3. School fees</a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>4. Withdrawal Policy</a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>5.FAQ on Admissions </a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>6. How to Apply</a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>7. Apply Online</a></li> 
          <li className=" hover:text-orange-500 font-semibold"><a>8. Online Payment</a></li> 
            
          </ul>
        </details>
      </li>
      <li className="hover:bg-blue-500 rounded-md"><a>Contact Us</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Achievements</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Key Information</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Policies</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Facilities</a></li>
      <li className="hover:bg-blue-500 rounded-md"><a>Request For A Tour</a></li>
    </ul>
    <button className="btn btn-info">Login</button>
  </div>
</div>
        </div>
    );
};

export default Header;