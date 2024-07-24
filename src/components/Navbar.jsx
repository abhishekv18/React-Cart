import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar=()=>{
    const {cart}=useSelector((state)=> state);
    return  (

        <div>
            <nav className="flex items-center justify-between h-20 mx-auto max-w-4xl">
                <NavLink to="/">
                <div className="ml-4">
                <img  src="../logo.png" className="h-14"/>
                </div>
                </NavLink>
             
                <div className="flex items-center font-medium text-slate-100 mr-4 space-x-5">
                    <NavLink to="/">
                    <p>Home</p>
                    </NavLink>
                 <NavLink to="/cart">
                    <div className="relative">
                    <FaCartShopping className="text-2xl"/>
                    {
                        cart.length>0 &&
                        <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center rounded-full text-white animate-bounce">{cart.length}</span>
                    }
                   
                    </div>
                 </NavLink>
                  
                </div>
            </nav>
        </div>
    )
};
export default Navbar;