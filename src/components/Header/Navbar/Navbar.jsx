import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
 <div className="bg-gray-100 shadow-md">
     <div className="max-w-[1320px] m-auto flex justify-between items-center py-6  ">
      <Logo></Logo>
      <ul className="flex items-center gap-6 ">
        <li className="text-xl font-bold" > 
          <NavLink to="/"
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-green-400 underline" : ""
           }
          
          >Home</NavLink>
        </li>
        <li className="text-xl font-bold" > 
          <NavLink to="/favorites"
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-green-400 underline" : ""
           }
          
          >Favorites</NavLink>
        </li>
        <li className="text-xl font-bold" > 
          <NavLink to="/login"
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-green-400 underline" : ""
           }
          
          >Login</NavLink>
        </li>
       
      </ul>
    </div>
 </div>
  );
};

export default Navbar;
