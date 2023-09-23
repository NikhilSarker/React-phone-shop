import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Phone from "../Pages/Phone/Phone";


const CreateMyRoute = createBrowserRouter([
  {
    path:'/',
    element:<MainLayouts></MainLayouts>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('phones.json')
      },
      {
        path:'/favorites',
        element:<Favorites></Favorites>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/phones/:id',
        element:<Phone></Phone>,
        loader:()=>fetch('phones.json')
      },
    ]
  }

]);

export default CreateMyRoute;