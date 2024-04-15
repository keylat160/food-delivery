{/*import foody from "../assets/images/foody.png";*/}
{/*import cartIcon from "../assets/icons/cart.svg";*/}
{/*import { link } from "react-router-dom";*/}

export const Header = () => {
    return (
    <nav id="header" className="bg-black text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2">
            <div className="logo-wrapper pl-4 flex items-center">
                <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"></Link>
                {/*<img src{foody} alt="logo" />*/}
               </div>
               <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                   <Link to="/" className="text-xl">Home</Link>
                   <Link to="#about" className="text-xl">About</Link>
               </div>
               <div className="flex-items-center justify-center space-x-4">
                    <Link to="/Cart">
                        <img src={CartIcon} alt="cart"/>
                        </Link>
                     <Link to="/login">Log In</Link>
                     
               </div>
            </div>
        </nav>
    )
}