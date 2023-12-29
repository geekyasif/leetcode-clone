import React from 'react'

function Bottomnav({handleRunCode ,loading}) {
  return (
    <div className="fixed bottom-0 bg-white shadow flex justify-between p-2 w-[100%] md:w-[50%] lg:w-[50%] items-center">
    <button
      onClick={handleRunCode}
      className="bg-red-500 rounded text-white md:px-4 lg:px-4 md:py-2 lg:py-2 px-2 py-2 text-xs md:text-base lg:text-base"
    >
      {loading ? "loading..." : "Prev"}
    </button>

    <p className='text-sm md:text-base lg:text-base'>1/29</p>

    <button
      onClick={handleRunCode}
      className="bg-red-500 rounded text-white md:px-4 lg:px-4 md:py-2 lg:py-2 px-2 py-2 text-xs md:text-base lg:text-base"
    >
      {loading ? "loading..." : "Next"}
    </button>
  </div>
  )
}

export default Bottomnav