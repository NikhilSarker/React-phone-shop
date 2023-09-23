import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayouts = () => {
  return (
    <div className="">
      <Navbar></Navbar>     
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default MainLayouts;