import React, { useEffect, useState } from "react";

import ProblemStatement from "./problemStatement/ProblemStatement";
import CodeEditor from "./codeEditor/CodeEditor";
import Bottomnav from "./problemStatement/bottomnav/Bottomnav";
import Tabs from "./problemStatement/tabs/Tabs";
import Submissions from "./problemStatement/Submissions";
import CodeEditorBottomnav from "./codeEditor/CodeEditorBottomnav";
import Hamburger from "./problemStatement/hamburger/Hamburger";
import Sidenav from "../navbar/Sidenav";
import { twoSum } from "../../utils/problems/two_sum";
import { useParams } from "react-router-dom";
import { ProblemList } from "../../utils/problems";

function Playground() {
  const { id: problemId } = useParams();
  // filtered problem
  const [problemStatement, setProblemStatement] = useState();

  console.log(problemStatement)

  const [code, setCode] = useState(``);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [submissionsDetails, setSubmissionsDetails] = useState("");

  const handleRunCode = () => {
    try {
      setLoading(true);
      const cb = eval(`(${code})`);
      const handlerFunction = eval(`(${problemStatement.problem.handlerFunction})`);
      if (typeof handlerFunction === "function") {
        const success = handlerFunction(cb);
        if (success) {
          console.log("All test case passes");
          setSubmissionsDetails("All test case passes");
        }
      }
    } catch (err) {
      console.log(err);
      setSubmissionsDetails("something went wrong!");
    } finally {
      setLoading(false);
      // setActiveTab("submissions")
    }

  };

  const handleSideNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const [_filteredProblem] = ProblemList.filter((p) => p.id === problemId);
    setCode(_filteredProblem.problem.starterCode)
    setProblemStatement(_filteredProblem);
  }, []);


  if (problemStatement === undefined) {
    return <p>Loading....</p>;
  }

  return (
    <div className="flex flex-col justify-between py-4 w-[100%] md:flex md:flex-row  md:absolute lg:flex lg:flex-row lg:absolute">
      <div className="">
        <div className="flex items-center px-4 my-2">
          <Hamburger handleSideNav={handleSideNav} />
          <Sidenav handleSideNav={handleSideNav} isOpen={isOpen} />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {activeTab === "description" && <ProblemStatement problemStatement={problemStatement} />}
        {activeTab === "submissions" && (
          <Submissions submissionsDetails={submissionsDetails} />
        )}
        {activeTab === "codeeditor" && (
          <div className="block md:hidden lg:hidden">
            <CodeEditor code={code} setCode={setCode} />
          </div>
        )}
        {activeTab === "description" && (
          <Bottomnav loading={loading} handleRunCode={handleRunCode} />
        )}
      </div>
      <div className="hidden md:block lg:block">
        <CodeEditor code={code} setCode={setCode} />
        <CodeEditorBottomnav loading={loading} handleRunCode={handleRunCode} />
      </div>
    </div>
  );
}

export default Playground;
