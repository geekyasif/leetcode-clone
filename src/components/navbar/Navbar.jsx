import React, { useState } from "react";
import Sidenav from "./Sidenav";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100%] relative">
      <div className="flex justify-between p-4 shadow">
        <Link className="text-xl font-bold text-pink-600" to="/">
          jLang
        </Link>
        <div>
          <Link className="" to="problems">
            Problems
          </Link>
          {/* <Link to="/playground" className="mx-2">
            Playground
          </Link> */}
        </div>
      </div>
      <Sidenav handleSideNav={handleSideNav} isOpen={isOpen} />
    </div>
  );
}

export default Navbar;
