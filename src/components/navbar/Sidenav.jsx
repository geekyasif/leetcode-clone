import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ProblemList } from "../../utils/problems";
import { Link } from "react-router-dom";


function Sidenav({ handleSideNav, isOpen }) {
  return (
    <div
      className={`${isOpen ? "w-[100vw] h-[100%] md:w-[25vw] lg:w-[25vw]" : "w-0"
        }  h-[100%] bg-white absolute z-10 top-0 left-0 overflow-y-scroll transition-width duration-300 ease`}
    >
      <div className="flex justify-between items-center px-2 py-1 shadow md:flex md:justify-end lg:flex lg:justify-end ">
        <p className="inline-block md:hidden lg:hidden text-xl font-bold text-pink-600">
          jLang
        </p>
        <button
          onClick={handleSideNav}
          className="rounded text-2xl font-bold m-2"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>

      {ProblemList.map((p, i) => (
        <Link
          to={`/problems/${p.id}`}
          key={i}
          className="p-2 my-3 hover:bg-pink-600 hover:text-white hover:cursor-pointer text-pink-600 text-sm md:text-base lg:text-base"
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}

export default Sidenav;
