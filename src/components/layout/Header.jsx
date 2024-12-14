import { useState, useEffect } from "react";
import logo from "../../assets/Foodieland.svg";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Navbar, SocialMediaIcons } from "../ui";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full border-b px-2 md:px-0 border-gray-300 duration-700 ${
        isFixed ? "fixed top-0 left-0 bg-white z-50" : ""
      }`}
    >
      <div className="container overflow-x-hidden mx-auto flex justify-between h-20 items-center">
        <img src={logo} alt="foodieland logo" loading="lazy" className="w-40" />

        <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
        <SocialMediaIcons />

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden hover:text-orange-500"
        >
          {showMenu ? <RxCross2 size={24} /> : <MdMenu size={24} />}
        </button>
      </div>
    </div>
  );
}

export default Header;
