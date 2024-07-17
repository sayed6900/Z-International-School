import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home.jsx';
import VisionMission from './Pages/AboutUsPage/VisionMission.jsx';
import WhyChooseUs from './Pages/AboutUsPage/WhyChooseUs.jsx';
import PrincipalMsg from './Pages/AboutUsPage/PrincipalMsg.jsx';
import OurTeam from './Pages/AboutUsPage/OurTeam.jsx';
import Curriculum from './Pages/AboutUsPage/Curriculum.jsx';
import Campus from './Pages/AboutUsPage/Campus.jsx';
import Login from './Components/Login/Login.jsx';
import Events from './Pages/AboutUsPage/Events.jsx';
import Gallery from './Pages/AboutUsPage/Gallery.jsx';
import Admission from './Pages/AdmissionPage/Admission.jsx';
import HowToApply from './Pages/AdmissionPage/HowToApply.jsx';
import ApplyOnline from './Pages/AdmissionPage/ApplyOnline.jsx';
import OnlinePayment from './Pages/AdmissionPage/OnlinePayment.jsx';
import Fees from './Pages/AdmissionPage/Fees.jsx';
import Policies from './Components/Policies/Policies';
import ContactUs from './Components/ContactUs/ContactUs';
import Facilities from './Components/Facilities/Facilities';
import Achievements from './Components/Achievements/Achievements';
import Scholarship from './Pages/AdmissionPage/Scholarship.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/vision',
        element:<VisionMission></VisionMission>
      },
      {
        path:'/whyUs',
        element:<WhyChooseUs></WhyChooseUs>
      },
      {
        path:'/principalMsg',
        element:<PrincipalMsg></PrincipalMsg>
      },
      {
        path:'/ourTeam',
        element:<OurTeam></OurTeam>,
        loader:()=> fetch('teachers.json'),
      },
      {
        path:'/curriculum',
        element:<Curriculum></Curriculum>
      },
      {
        path:'/campus',
        element:<Campus></Campus>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/events',
        element:<Events></Events>,
        loader:()=> fetch('events.json')
      },
      
      {
        path:'/gallery',
        element:<Gallery></Gallery> ,
      },
      {
        path:'/admission',
        element:<Admission></Admission> ,
      },
      {
        path:'/howToApply',
        element:<HowToApply></HowToApply> ,
      },
      {
        path:'/applyOnline',
        element:<ApplyOnline></ApplyOnline> ,
      },
      {
        path:'/onlinePayment',
        element:<OnlinePayment></OnlinePayment> ,
      },
      {
        path:'/fees',
        element:<Fees></Fees> ,
      },
      {
        path:'/policy',
        element:<Policies></Policies> ,
      },
      {
        path:'/contactUs',
        element:<ContactUs></ContactUs> ,
      },
      {
        path:'/facilities',
        element:<Facilities></Facilities> ,
      },
      {
        path:'/achievements',
        element:<Achievements></Achievements> ,
      },
      {
        path:'/scholarship',
        element:<Scholarship></Scholarship> ,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
