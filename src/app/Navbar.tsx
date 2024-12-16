import React from "react";

import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFilterList } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";








export default function Navbar (){
    return(
        <div className='w-full bg-white h-124 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
        <div className="input relative w-full md:w-auto">
         <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2"/>
          <input 
            type="text" 
            title="search" 
            placeholder="Say something here" 
            className='border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12'
          />
          <MdOutlineFilterList className="absolute top-1/2 right-3 transform -translate-y-1/2"/>
        </div>
      </div>

      {/* RIGHT SIDE PANEL */}
      
      
      <div className="flex flex-row items-center justify-between bg-white p-0 gap-5 w-full max-w-[236px] h-11 fixed md:absolute md:left-[1000px] md:top-10">
  <button className="flex justify-center items-center w-11 h-11 opacity-80 border border-[rgba(195,212,233,0.4)] rounded-full">
    <IoHeart size={24} />
  </button>

  <button className="flex justify-center items-center w-11 h-11 opacity-80 border border-[rgba(195,212,233,0.4)] rounded-full">
    <FaBell size={24} />
  </button>

  <button className="flex justify-center items-center w-11 h-11 opacity-80 border border-[rgba(195,212,233,0.4)] rounded-full">
    <IoMdSettings size={24} />
  </button>

  <button className="flex justify-center items-center w-11 h-11 opacity-80 border border-[rgba(195,212,233,0.4)] rounded-full">
    <CgProfile size={24} />
  </button>
</div>

    </div>
    )
}