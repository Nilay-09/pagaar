import React, { useState } from "react";

// import PagaarLogo from "../assets/landing/PagaarLogo.svg";

import ShowModal from "./ShowModal";
import ShowRegistrationModal from "./ShowRegistrationModal";
import PagaarLogoF from "../assets/landing/PagaarLogoF";
import BackgroundMainLogo from "../assets/landing/BackgroundMainLogo";
import DownloadIcon from "../assets/landing/DownloadIcon.svg";
import PlayStoreIcon from "../assets/landing/play-store.svg";
import AppStoreIcon from "../assets/landing/app-store.svg";
import IpadImage from "../assets/landing/ipad.svg";
import Earth from "../assets/landing/earth2.svg";
import Rocket from "../assets/landing/rocket.svg";

import Hands from "../assets/landing/hathmepakdtahua.svg";
import ManWithFlag from "../assets/landing/jitegaadmi.svg";
import CircleSecondSvg from "../assets/landing/CircleSecondSvg";
import FooterBackGround from "../assets/landing/Tikka.svg";
import X from "../assets/landing/X.svg";
import Telegram from "../assets/landing/Telegram.svg";
import Link from "../assets/landing/Link.svg";

function landing() {
  const [closeModal, setCloseModal] = useState(true);

  const closeModalByClick = () => {
    setCloseModal(true);
  };

  const [closeModalReg, setCloseModalReg] = useState(true);

  const closeModalRegByClick = () => {
    setCloseModalReg(true);
  };

  return (
    <>
      <div className="w-screen min-h-screen pt-[3.5rem] relative">
        <div className="w-full h-[3.375rem] b">
          {/* Navbar */}
          <div className="w-[64rem] h-full  mx-auto flex justify-between w-navbar-holder">
            <div 
            onClick={()=>setCloseModalReg(false)}
            className="w-[7.75rem] mx-0  h-full flex justify-center items-center">
              <PagaarLogoF />
            </div>
            {!closeModal && <ShowModal closeModalByClick={closeModalByClick}/>}
            {!closeModalReg && <ShowRegistrationModal closeModalRegByClick={closeModalRegByClick}/>}
            <div
            onClick={()=>setCloseModal(false)}
             className="h-[92%] w-[196px] mr-1 rounded bg-[#000] border-[1px] border-[#fff] text-[#fff] flex justify-center items-center text-[1rem] leading-4 poppins-600 custom-shadow">
              Join Waiting List
            </div>
          </div>
        </div>

        {/* Main Div */}
        <div className="w-full w-main-landing-div px-[4rem] height-main-div  relative">
          <div className="absolute inset-0 z-0 overflow-y-hidden w-main-landing">
            <BackgroundMainLogo />
          </div>

          <div className="z-10 mt-[80px] w-full ">
            <div className=" bg-white mx-auto w-[551px] flex flex-col">
              {/* Heading */}
              <div className="flex flex-col gap-[52px] justify-between">
                <div className="poppins-700 text-[42px] text-center leading-[56px] overflow-y-hidden z-20">
                  Get all the openings on internet at one place.
                </div>
                <div className="w-full">
                  <div className="w-[169px] mx-auto flex justify-center gap-1">
                    <span>
                      {" "}
                      <img src={DownloadIcon} alt="" />{" "}
                    </span>
                    <span className="text-[#313131] text-[16px] poppins-600 z-20">
                      Coming Soon On{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex pt-10 z-20">
                <div className="w-[310px] mx-auto flex justify-between">
                  <span>
                    {" "}
                    <img src={AppStoreIcon} alt="" />{" "}
                  </span>
                  <span>
                    {" "}
                    <img src={PlayStoreIcon} alt="" />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Main Div */}
        <div className="w-full min-h-[1570px] pt-[50px] px-[4rem] relative">
          <div className="absolute inset-0 -z-40 overflow-y-hidden">
            <CircleSecondSvg />
          </div>

          <div className="w-full h-[716px] relative">
            <div className="w-full h-[526px] -z-10 "></div>
            <div className="w-full h-[190px] -z-10 bg-[#683BE8] rounded-tl-3xl rounded-tr-3xl"></div>
            <div className="flex justify-center absolute inset-0 overflow-y-hidden ">
              <img src={IpadImage} alt="" className="h-full" />
            </div>
          </div>

          <div className="w-[100%] bg-[#683BE8] ">
            <div className="flex px-[112px] gap-[88px] justify-center items-center">
              <div class="w-[533px] overflow-y-hidden height-text-landing responsive-container">
                <div class="poppins-600 text-[#fff] text-[38px] leading-[56px] responsive-text">
                  Get instant real-time alerts of all the openings on the
                  internet
                </div>
              </div>

              <div className="w-[500px] h-full overflow-y-hidden">
                <img
                  src={Earth}
                  alt=""
                  className="w-full h-[385px] object-cover earth-img"
                />
              </div>
            </div>
          </div>

          <div className="w-full relative bg-white">
            <div className="absolute top-0 w-full h-[190px] bg-[#683BE8] rounded-bl-3xl rounded-br-3xl z-0"></div>
            <div className="absolute top-0 w-full h-[280px] bg-[#fff] z-[-1]"></div>

            <div className="relative  flex cardHolder pt-[34px]  flex-wrap gap-8 w-[90%] w-main-landing-card-holder mx-auto min-h-[480px] mb-12 z-10">
              {/* Card */}
              <div className="w-card-landing h-[27.25rem] pt-[50px] relative">
                <div className="absolute top-0 left-0">
                  <img src={Rocket} alt="" />
                </div>
                {/* //box */}
                <div className="bg-[#141416] w-full min-h-[380px] rounded-[32px] text-[#E6E8EC] pt-[11rem] pl-[48px] pr-[54px] text-[24px] leading-[32px]">
                  <div className="w-[100%]">
                    Just set an alert in your preferred job profile.
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="w-card-landing min-h-[27.25rem] pt-[50px] relative">
                <div className="absolute top-0 left-0">
                  <img src={Hands} alt="" />
                </div>
                {/* //box */}
                <div className="bg-[#141416] w-full min-h-[380px] rounded-[32px] text-[#E6E8EC] pt-[11rem] pl-[48px] pr-[54px] text-[24px] leading-[32px]">
                  <div className="w-[100%]">
                    Pagaar will hunt down all the openings for that profile from
                    the internet.
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="w-card-landing min-h-[27.25rem] pt-[50px] relative">
                <div className="absolute top-0 left-0">
                  <img src={ManWithFlag} alt="" />
                </div>
                {/* //box */}
                <div className="bg-[#141416] w-full min-h-[380px] rounded-[32px] text-[#E6E8EC] pt-[11rem] pl-[48px] pr-[54px] text-[24px] leading-[32px]">
                  <div className="w-[100%]">
                    And be the fastest to apply for any job opening.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full min-h-[520px] flex justify-center relative">
          <div className="flex justify-center absolute bottom-0 -right-0 -left-0 overflow-y-hidden -z-10">
            <img src={FooterBackGround} alt="" className=" w-full h-[60%]" />
          </div>

          {/* Box */}
          <div className="mt-[84px] w-[305px] ">
            <div className="w-full flex flex-col items-center justify-between min-h-[106px]">
              <div className="w-[124px] flex justify-center items-center">
                <PagaarLogoF />
              </div>

              <div className="text-[1.125rem] leading-[24px] text-[#E6E8EC] poppins-600">
                Pagaar.io 0.0.01
              </div>
            </div>

            <div className="w-full mt-8 mx-auto flex justify-between">
              <span>
                {" "}
                <img src={AppStoreIcon} alt="" />{" "}
              </span>
              <span>
                {" "}
                <img src={PlayStoreIcon} alt="" />{" "}
              </span>
            </div>

            <div className="text-[17px] flex gap-[20px] mt-[30px] justify-center leading-[24px] text-[#777E90] poppins-500">
              <span className="">Privacy Policy</span>
              <span className="">team@pagaar.io</span>
            </div>

            <div className="w-full flex justify-center mt-7">
              <div className="w-[145px] flex justify-between items-center">
                <img src={X} alt="" />
                <img src={Telegram} alt="" />
                <img src={Link} alt="" />
              </div>
            </div>

            <div className="w-full text-center mt-7">
              <span className="poppins-400 text-[#777E90] text-[12px] leading-5">
                ©2021, Unbook Solutions Pvt Ltd
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default landing;
