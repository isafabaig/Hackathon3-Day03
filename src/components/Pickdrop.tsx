import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";



export default function pickdrop(){
    return(
        <div className="flex flex-col items-center gap-5 md:flex-row">
          {/* Pick-Up Section */}
<div className="bg-white group shadow-lg border border-gray-300 rounded-lg p-6 max-w-full md:max-w-[600px] h-auto">
  {/* Header */}
  <div className="flex items-center gap-3">
    <IoIosRadioButtonOn className="text-blue-500 text-xl md:text-2xl" />
    <h1 className="text-lg md:text-xl font-semibold">Pick-Up</h1>
  </div>

  {/* Details */}
  <div className="flex flex-wrap md:flex-nowrap items-start gap-6 md:gap-10 mt-6">
    {/* Locations */}
    <div className="flex flex-col items-start gap-3 flex-1">
      <h1 className="text-black font-medium text-sm md:text-base">LOCATIONS</h1>
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-xs md:text-sm">Select your city</p>
        <RiArrowDropDownLine className="text-gray-400 text-xl" />
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block h-[48px] w-[1px] bg-gray-300"></div>

    {/* Date */}
    <div className="flex flex-col items-start gap-3 flex-1">
      <h1 className="text-black font-medium text-sm md:text-base">DATE</h1>
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-xs md:text-sm">Select your date</p>
        <RiArrowDropDownLine className="text-gray-400 text-xl" />
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block h-[48px] w-[1px] bg-gray-300"></div>

    {/* Time */}
    <div className="flex flex-col items-start gap-3 flex-1">
      <h1 className="text-black font-medium text-sm md:text-base">TIME</h1>
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-xs md:text-sm">Select your time</p>
        <RiArrowDropDownLine className="text-gray-400 text-xl" />
      </div>
    </div>
  </div>
</div>

{/* Swipe Icon */}
<div className="flex items-center justify-center my-6">
  <LuArrowDownUp size={24} className="border rounded bg-blue-800 text-white p-2" />
</div>

{/* Drop-Off Section */}
<div className="bg-white group shadow-lg border border-gray-300 rounded-lg p-6 max-w-full md:max-w-[600px] h-auto">
  {/* Header */}
  <div className="flex items-center gap-3">
    <IoIosRadioButtonOn className="text-blue-500 text-xl md:text-2xl" />
    <h1 className="text-lg md:text-xl font-semibold">Drop-Off</h1>
  </div>

  {/* Details */}
  <div className="flex flex-wrap md:flex-nowrap items-start gap-6 md:gap-10 mt-6">
    {/* Locations */}
    <div className="flex flex-col items-start gap-3 flex-1">
      <h1 className="text-black font-medium text-sm md:text-base">LOCATIONS</h1>
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-xs md:text-sm">Select your city</p>
        <RiArrowDropDownLine className="text-gray-400 text-xl" />
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block h-[48px] w-[1px] bg-gray-300"></div>

    {/* Date */}
    <div className="flex flex-col items-start gap-3 flex-1">
      <h1 className="text-black font-medium text-sm md:text-base">DATE</h1>
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-xs md:text-sm">Select your date</p>
        <RiArrowDropDownLine className="text-gray-400 text-xl" />
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block h-[48px] w-[1px] bg-gray-300"></div>

    {/* Time */}
    <div className="flex flex-col items-start gap-3 flex-1">
      <h1 className="text-black font-medium text-sm md:text-base">TIME</h1>
      <div className="flex items-center gap-2">
        <p className="text-gray-500 text-xs md:text-sm">Select your time</p>
        <RiArrowDropDownLine className="text-gray-400 text-xl" />
      </div>
    </div>
  </div>
</div>

          </div>
    )}
 