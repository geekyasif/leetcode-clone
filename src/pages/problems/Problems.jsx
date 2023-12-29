import React from "react";
import { ProblemList } from "../../utils/problems";
import { Link } from "react-router-dom";

function Problems() {
  return (
    <div className="mx-auto w-[80%]">
      <ul className="list-style-none">
        {ProblemList.map((p) => (
          <li>
            <Link to={`/problems/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problems;
