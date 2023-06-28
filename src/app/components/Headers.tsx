import React from "react";
import DarkMode from '@/app/utilities/DarkMode'
function Headers() {
  return (
    <header className="font-bold ">
      <h1 >Social Media Dashboard</h1>
      <p className="text-p text-[#63687D]">Total Followers: 23,004</p>
      <hr className="border border-[#848BAB] border-solid w-full  mt-6 mb-4"/>
      <DarkMode />
    </header>
  );
}

export default Headers;
