import React from "react";

function DarkMode() {
  return (
    <section className="flex justify-between">
      <span>Dark Mode</span>
      <label className="relative inline-flex cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer/dot" />
        <div className="w-12 h-6 bg-gray-200 rounded-full peer/dot peer-checked/dot:after:translate-x-6 peer-checked/dot:after:bg-red-500 after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked/dot:bg-blue-600"></div>
      </label>
    </section>
  );
}

export default DarkMode;
