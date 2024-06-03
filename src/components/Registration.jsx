import React from "react";
import LOGO from "../assets/landing/PagaarLogo.svg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useNavigate } from "react-router-dom";


function Registration() {

    const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen px-[100px] flex justify-between">
      {/* logo */}

      <div className="">
      <div className="mt-4">
        <img src={LOGO} alt="" />
      </div>
      <div className="my-[64px]">
        <MdOutlineKeyboardBackspace 
            className="w-9 h-9 cursor-pointer" 
            onClick={() => navigate(-1)} />
      </div>

      {/* Form */}
      <div className="">
        <div className="text-[#28293D] text-[29px] poppins-600 leading-[43px]">
          Basic Information
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Email"
          />
        </div>

        <div className="text-[#28293D] text-[29px] poppins-600 leading-[43px] mt-16">
        What is your current employment status?
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="I have job experience"
          />
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="I am looking for my first role"
          />
        </div>


        <div className="text-[#28293D] text-[29px] poppins-600 leading-[43px] mt-16">
        What type of role are you interested in?
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Full-Time"
          />
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Full-Time"
          />
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Internship"
          />
        </div>


        <div className="text-[#28293D] text-[29px] poppins-600 leading-[43px] mt-16">
        Which role are you looking for?
        </div>
        <div className="my-6 flex flex-col gap-4">
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Product Management"
          />
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Tech"
          />
          <input
            type="text"
            className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
            placeholder="Tech"
          />
        </div>


      </div>
      </div>

      <div className="w-[107px] min-h-max bg-[#D7C9FF]"></div>
    </div>
  );
}

export default Registration;
