import React from "react";
import { NavLink } from "react-router-dom";

const Links = [
  { href: "/", label: "Home" },
  { href: "/recipe", label: "Recipes" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact us" },
];

function Navbar({ setShowMenu, showMenu }) {
  return (
    <nav
      className={`absolute z-50 left-0 transition-all duration-500 ${
        showMenu
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-x-full lg:opacity-100 lg:translate-x-0"
      } top-20 lg:static bg-white lg:bg-transparent`}
    >
      <ul className="flex flex-col lg:flex-row justify-between py-10 lg:py-0 w-screen lg:w-fit shadow-md lg:shadow-none items-center gap-10">
        {Links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-orange-600"
                  : "font-medium hover:text-orange-600"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
