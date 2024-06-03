import React, { useState, useEffect } from 'react';
import CheckRight from '../assets/landing/checkRight.png'

function ShowModal({ closeModalByClick }) {
  const [isThankYouMessageVisible, setIsThankYouMessageVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = '';
    };
  }, []);

  const handleButtonClick = () => {
    setIsThankYouMessageVisible(true);
  };

  return (
    <>
      <div 
        className="modal-wrapper bg-[#00000033] fixed top-0 left-0 right-0 bottom-0"
        onClick={() => closeModalByClick()}
      ></div>
      <div className="fixed w-[544px] bg-white py-[36px] px-[32px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#D0D0D0] border-[1px] rounded-[8px]">
        {!isThankYouMessageVisible ? (
          <>
            {/* Heading Div */}
            <div className="px-[20px] py-[8px] text-center flex flex-col gap-1">
              <div className="text-[29px] w-full text-[#28293D] poppins-700 leading-[43.31px]">Join Our Waiting List</div>
              <div className="text-[14.44px] w-full text-[#28293D] poppins-400">Add mobile number and email so that we can connect later.</div>
            </div>

            {/* Input Div */}
            <div className="py-[19.24px] pt-[19.24px] pb-[8.2px] flex flex-col items-center gap-[8px]">
              <input 
                type="text"
                className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
                placeholder="+91"
              />
              
              <input 
                type="text"
                className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
                placeholder="Email"
              />
            </div>

            {/* Button Div */}
            <div className="pt-4 flex flex-col items-center">
              <div 
                className="w-[301px] h-[46px] bg-[#C8FFA6] poppins-black flex justify-center items-center border-[1.4px] border-[#000000] custom-shadow-modal-button cursor-pointer"
                onClick={handleButtonClick}
              >
                Join waiting list
              </div>
            </div>
          </>
        ) : (
          <div className="text-center flex flex-col gap-1">
            <div className="flex justify-center"> <img src={CheckRight} alt="" /></div>
            <div className="text-[29px] w-full text-[#28293D] poppins-700 leading-[43.31px]">Thank You!</div>
            <div className="text-[14.44px] w-full text-[#28293D] poppins-400">We have received your details and will contact you soon.</div>
            <div className="pt-4 flex flex-col items-center">
              <div 
                className="w-[301px] h-[46px] bg-[#C8FFA6] poppins-black flex justify-center items-center border-[1.4px] border-[#000000] custom-shadow-modal-button cursor-pointer"
                onClick={() => closeModalByClick()}
              >
                Join waiting list
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowModal;
