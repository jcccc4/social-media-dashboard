import React from "react";
import DarkMode from "@/app/utilities/DarkMode";
function Headers() {
  return (
    <header className="font-bold lg:flex lg:justify-between">
      <div>
        <h1>Social Media Dashboard</h1>
        <p className="text-p mt-1 text-[#63687D] dark:text-[#8C98C6]">
          Total Followers: 23,004
        </p>
      </div>
      <hr className="border border-[#848BAB] border-solid w-full  mt-6 mb-4 lg:hidden" />
      <DarkMode />
    </header>
  );
}

export default Headers;
