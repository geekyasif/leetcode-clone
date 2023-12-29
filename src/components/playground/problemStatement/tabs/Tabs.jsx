import React from "react";



function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="w-[100%]">
      <button
        onClick={() => setActiveTab("description")}
        className={
          activeTab === "description"
            ? "bg-pink-600 text-white p-2 rounded-t text-sm md:text-base lg:text-base"
            : `p-2 hover:border-pink-600 hover:border-[1px] rounded-t hover:text-pink-600 text-sm md:text-base lg:text-base`
        }
      >
        Description
      </button>
      <button
        onClick={() => setActiveTab("submissions")}
        className={
          activeTab === "submissions"
            ? "bg-pink-600 text-white p-2 rounded-t text-sm md:text-base lg:text-base"
            : `p-2 hover:border-pink-600 hover:border-[1px] rounded-t hover:text-pink-600 text-sm md:text-base lg:text-base`
        }
      >
        Submissions
      </button>

      <button
        onClick={() => setActiveTab("codeeditor")}
        className={
          activeTab === "codeeditor"
            ? "bg-pink-600 text-white p-2 rounded-t inline-block md:hidden lg:hidden text-sm md:text-base lg:text-base"
            : `p-2 hover:border-pink-600 hover:border-[1px] rounded-t hover:text-pink-600 inline-block md:hidden lg:hidden text-sm md:text-base lg:text-base`
        }
      >
        Code Editor
      </button>
      <hr />
    </div>
  );
}

export default Tabs;
