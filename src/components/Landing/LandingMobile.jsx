import React, { useState } from 'react'
import LOGO from '../../assets/landingMobile/LogoFinal.png'
import MainImage from '../../assets/landingMobile/herosection.png'
import DownloadIcon from '../../assets/landingMobile/DownloadIcon.svg'
import PlayStore from '../../assets/landingMobile/play-store.svg'
import AppStore from '../../assets/landingMobile/app-store.svg'
import Earth from '../../assets/landingMobile/earth2.png'

import C1 from '../../assets/landingMobile/card1.png'
import C2 from '../../assets/landingMobile/card2.png'
import C3 from '../../assets/landingMobile/card3.png'


// import C1 from '../../assets/landingMobile/card1.svg'
// import C2 from '../../assets/landingMobile/card2.svg'
// import C3 from '../../assets/landingMobile/card3.svg'
// import PagaarLogoF from '../../assets/landing/PagaarLogoF'

import X from "../../assets/landingMobile/X.svg";
import Telegram from "../../assets/landingMobile/Telegram.svg";
import ipad from "../../assets/landingMobile/ipad.png";
import bgEC from "../../assets/landingMobile/bgEC.svg";
import Link from "../../assets/landingMobile/Link.svg";
import FooterBackGround from "../../assets/landingMobile/tikki2.svg";
import ShowModal from '../ShowModal'
import ShowRegistrationModal from '../ShowRegistrationModal'


export default function LandingMobile() {


  const [closeModal, setCloseModal] = useState(true);

  const closeModalByClick = () => {
    setCloseModal(true);
  };

  const [closeModalReg, setCloseModalReg] = useState(true);

  const closeModalRegByClick = () => {
    setCloseModalReg(true);
  };

  return (
    <div className="w-screen min-h-screen relative">
      {/* LOGO */}
      <div 
      // onClick={()=>setCloseModalReg(false)}
      className="w-full h-[5.625rem] flex justify-center items-center">
        <img src={LOGO} alt="" className='w-[7.75rem] h-[3.125rem]' />
      </div>

      {/* Title Holder */}

      <div className="">
        <div className="w-full max-w-[551px] mx-auto px-6 pt-[5.75rem]">
          <div className="poppins-700 text-[40px] leading-[56px] text-center">
          Get all the jobs on the internet in one place.
          </div>
        </div>

        {/* Button */}
        {!closeModalReg && <ShowRegistrationModal closeModalRegByClick={closeModalRegByClick}/>}
        {!closeModal && <ShowModal closeModalByClick={closeModalByClick}/>}
        <div
        onClick={()=>setCloseModal(false)}
          className="mx-auto w-[14.125rem] h-[60px] bg-[#28293D] mt-12 flex justify-center items-center poppins-600 text-[18.46px] text-[#fff]
                        border-[#fff] border-[1.15px] rounded custom-shadow-button-mobile mb-2"
        >
          Join Waiting List
        </div>
      </div>

      {/* Image Holder */}

      <div className="mt-6 w-full min-h-[27.3125rem]">
        <img src={MainImage} alt="" className='mx-auto'/>
      </div>

      {/* Download */}
      <div className="w-full min-h-[178px] mt-1 pt-14 pb-2">
        <div className="flex gap-2 w-[304px] mx-auto justify-center poppins-600 text-[1rem] text-[#313131]">
          <span>
            <img src={DownloadIcon} alt="" />
          </span>
          <span>Coming Soon On</span>
        </div>

        <div className="mt-[40px] w-full justify-center mx-auto flex gap-4">
          <img src={PlayStore} alt="" />
          <img src={AppStore} alt="" />
        </div>
      </div>

      <div className="">
        <div className="w-full min-h-[379px]  mt-[65px] relative overflow-y-hidden">
          <img
            src={bgEC}
            alt=""
            className="absolute top-0 left-0 right-0 object-cover -z-10"
          />
          <div className="w-full bg-[#683BE8] min-h-[116px] absolute bottom-[0px] rounded-tl-[48px] rounded-tr-[48px] -z-10"></div>
          <img src={ipad} alt="" className="mx-auto z-10 w-[90%] mt-[67px]" />
        </div>

        <div className='w-full bg-[#683BE8] px-6'>
        <div className="earth-mobile-text  py-[30px] urbanist-800 text-[48px] leading-[56px] bg-[#683BE8] text-white">
          Get instant real-time alerts of all the openings on the internet
        </div>
        </div>

        <div className="w-full flex flex-col relative earth-mobile">
          <div className="min-h-[290px] bg-[#683BE8]"></div>

          <div className="flex-1 bg-[#fff]"></div>
          <img src={Earth} alt="" className="absolute right-0 top-1 w-full sm:w-[80%] object-cover h-[95%] sm:h-[80%] z-20" />
        </div>

      </div>

      <div className="w-full pb-16 mt-6 sm:mx-auto flex justify-center items-center flex-col px-6 gap-7">
        <div className="w-full max-w-[337px] min-h-max custom-shadow-mobile-card rounded-[34.75px]">
          <img src={C1} alt="" />
        </div>
        <div className="w-full max-w-[337px] min-h-max custom-shadow-mobile-card rounded-[34.75px]">
          <img src={C2} alt="" />
        </div>
        <div className="w-full max-w-[337px] min-h-max custom-shadow-mobile-card rounded-[34.75px]">
          <img src={C3} alt="" />
        </div>
      </div>

      <div className="footer w-full mt-[100px] min-h-[442px] flex pt-[10px] pb-[52px] relative">
        <div className="flex justify-center absolute bottom-0 -right-0 -left-0 overflow-y-hidden -z-10">
          <img src={FooterBackGround} alt="" className="w-full h-full" />
        </div>

        <div className="w-[19rem] mx-auto">
          <div className="w-full flex flex-col items-center justify-between min-h-[106px]">
            <div className="w-[124px] flex justify-center items-center">
            <img src={LOGO} alt="" className='w-[7.75rem] h-[3.125rem]' />
            </div>

            <div className="text-[1.125rem] leading-[24px] text-[#98BAFF] poppins-600 overflow-y-hidden">
              Pagaar.io 0.0.01
            </div>
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
  );
}
