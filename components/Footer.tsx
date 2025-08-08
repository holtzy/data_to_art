import React from "react";

export default function Footer() {
  return (
    <div className="h-24 w-full bg-card mt-4">
      <div className="wrapper flex items-center h-full">
        <div className="w-full grid grid-cols-3 gap-1">
          <div className="text-sm font-light flex flex-row justify-start items-center mt-1">
            <span className="hidden sm:inline">Data To Art</span>
          </div>

          <div className="flex flex-row justify-center items-center ">Yo</div>

          <div className="text-sm font-light flex flex-row justify-end items-center mt-1">
            <span className="hidden sm:inline">
              <span>About</span>
              <span> | </span>
              <span>License</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
