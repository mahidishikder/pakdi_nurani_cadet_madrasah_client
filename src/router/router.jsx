import { createBrowserRouter } from "react-router-dom";
import Loyout from "../Loyout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import OurCampus from "../pages/OurCampus/OurCampus";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Notice from "../pages/Notice/Notice";





const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error></Error>,
    element:<Loyout></Loyout>,
    children: [
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/our-campuses',
        element:<OurCampus></OurCampus>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/notice',
        element:<Notice></Notice>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

export default router