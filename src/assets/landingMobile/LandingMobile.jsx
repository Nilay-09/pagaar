import React from 'react'
import LOGO from '../../assets/landingMobile/PagaarLogo.svg'
import MainImage from '../../assets/landingMobile/MainImage.svg'
import DownloadIcon from '../../assets/landingMobile/DownloadIcon.svg'




export default function LandingMobile() {
  return (
    <div className="w-screen min-h-screen relative">
      {/* LOGO */}
      <div className="w-full h-[5.625rem] flex justify-center items-center">
        <img src={LOGO} alt="" />
      </div>

      {/* Title Holder */}

      <div className="">
        <div className="w-full px-6 pt-[5.75rem]">
          <div className="poppins-700 text-[40px] leading-[56px] text-center">
            Get all jobs on the internet in one place.
          </div>
        </div>

        {/* Button */}
        <div
          className="mx-auto w-[14.125rem] h-[60px] bg-[#28293D] mt-12 flex justify-center items-center poppins-600 text-[18.46px] text-[#fff]
                        border-[#fff] border-[1.15px] rounded custom-shadow-button-mobile mb-2"
        >
          Join Waiting List
        </div>
      </div>

      {/* Image Holder */}

      <div className="mt-6 w-full min-h-[27.3125rem]">
        <img src={MainImage} alt="" />
      </div>

      <div className="w-full min-h-[178px] mt-1 pt-14">

        <div className="flex gap-2 w-[304px] mx-auto justify-center poppins-600 text-[1rem] text-[#313131]">
          
          <span>
            <img src={DownloadIcon} alt="" />
          </span>
          <span>Coming Soon On</span>

        </div>

        <div className="mt-[40px] w-[304px]">

          

        </div>
      </div>
    </div>
  );
}
