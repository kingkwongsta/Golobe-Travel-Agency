import Image from "next/image";
import airplane from "./../../public/airplane.png";
import stays from "./../../public/bed.png";
import logo from "./../../public/logo.png";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 mx-[16px]">
      <div className="navbar-start">
        <div className="menu menu-horizontal px-1 sm:max-md:hidden">
          <div className="flex flex-row mr-5">
            <Image src={airplane} height={24} width={24} alt="airplane" />
            <a>Find Flights</a>
          </div>
          <div className="flex flex-row">
            <Image src={stays} height={24} width={24} alt="airplane" />
            <span>Stays</span>
          </div>
        </div>
        {/* Hamburger Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Find Flights</a>
            </li>
            <li>
              <a>Find Stays</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Image src={logo} height={36} width={110.35} alt="Golobe Logo" />
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Login</a>
          </li>
          <li>
            <a className="btn btn-primary">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}