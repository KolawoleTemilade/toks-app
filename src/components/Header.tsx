import * as React from "react";
import jtoks_logo from "../assets/logo-img/jtoks-logo.png";
import {
  faHeart,
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    // bg-[#EAC696]---BUTTON
    // bg-[#eac69688]----HEADER BG
  

    <>
      {/* <div className="fixed"> */}
        <div className="Header-section fixed flex items-center top-0 justify-between bg-[#EAC696] w-full px-10 z-[999] h-[80px] border border-b-2 rounded-md  ">
          <div className="logo flex items-center justify-center">
            <img src={jtoks_logo} alt="logo" className="w-20 h-20" />
          </div>
          <nav className="nav-list  ">
            <ul className="flex gap-20 capitalize cursor-pointer">
             <Link to = "/"> <li>home</li></Link>
              <li>about us</li>
              <li>shop</li>
              <li>contact us</li>
            </ul>
          </nav>
          <div className="text-[23px] flex gap-7">
            <Link to="/login">
              <button className="  " title="Login">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </Link>
            <Link to = "/search">
            <button className="" title="Search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            </Link>
            <div>
              <button className="relative" title="Wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <div className="border text-[10px] items-center justify-center flex border-red-500 bg-red-500 w-4 h-4 rounded-full absolute top-6 right-20">
                1
              </div>
            </div>
            <div>
              <button className="relative" title="Cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <div className="border border-red-500 bg-red-500 w-2 h-2 rounded-full absolute top-6 right-9"></div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Header;
