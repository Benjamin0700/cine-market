import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-64 right-0 h-16 z-50 bg-white p-3 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        } flex items-center justify-between px-6`}
    >
      {/* Search Input */}
      <div className="relative w-1/4">
        <input
          type="text"
          placeholder="Search here"
          className="w-full p-2 pl-4 border rounded-lg text-gray-600 focus:outline-none"
        />
        <Search className="absolute right-3 top-3 text-gray-400" size={18} />
      </div>
      {/* Menu Links */}
      <div className="flex items-center gap-6 text-gray-600 font-semibold">
        <Link to="/contacts" className="hover:text-gray-400">Контакты</Link>
        <Link to="/works" className="hover:text-gray-400">Наши работы</Link>
        <Link to="/price" className="hover:text-gray-400">Прайс</Link>
        <Link to="/locations" className="hover:text-gray-400">Локации</Link>
      </div>


      {/* Icons */}
      <div className="flex items-center">
        <Link to="/basket" className="relative bg-gray-400 p-2 rounded-lg">
          <ShoppingBasket className="text-gray-600" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
