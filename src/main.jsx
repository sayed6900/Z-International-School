import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home.jsx';
import VisionMission from './Pages/AboutUsPage/VisionMission.jsx';
import WhyChooseUs from './Pages/AboutUsPage/WhyChooseUs.jsx';
import PrincipalMsg from './Pages/AboutUsPage/PrincipalMsg.jsx';

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
        path:'/whyUs',
        element:<WhyChooseUs></WhyChooseUs>
      },
      {
        path:'/whyUs',
        element:<WhyChooseUs></WhyChooseUs>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
