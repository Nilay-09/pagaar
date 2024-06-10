import React, { useState, useEffect } from 'react';
import CheckRight from '../assets/landing/Right.svg'
import { RxCross2 } from 'react-icons/rx';
import Whatsapp from '../assets/landing/whatsapp.svg'

function ShowModal({ closeModalByClick }) {

  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isThankYouMessageVisible, setIsThankYouMessageVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber') {
      setMobileNumber(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    // Add event listeners to prevent scrolling
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      // Remove event listeners when the modal is closed
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  const handleButtonClick = async () => {
    const data = {
      phone_number:mobileNumber,
      email: email
    };
  
    try {
      const response = await fetch('https://pagaar-backend.azurewebsites.net/users/create/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': 'pratik',  
          'X-Request-Id': '1111'  
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log(response)
        setIsThankYouMessageVisible(true);
      } else {
        console.error('Failed to create waitlist', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <div
        className="modal-wrapper bg-[#00000033] fixed top-0 left-0 right-0 bottom-0 z-50"
        onClick={() => closeModalByClick()}
      ></div>
      <div className="z-50 fixed w-[90%]  sm:w-[544px] bg-white py-[36px] px-[32px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#D0D0D0] border-[1px] rounded-[8px]">
        {!isThankYouMessageVisible ? (
          <>
            {/* Heading Div */}
            <div className="w-full flex justify-end h-6 overflow-hidden">
              <RxCross2
                onClick={() => closeModalByClick()}
                className="text-[#868686] cursor-pointer"
              />
            </div>
            <div className="px-[20px] py-[8px] text-center flex flex-col gap-1">
              <div className="text-[28px] w-full text-[#28293D] poppins-700 leading-[43.31px]">
                Join Waiting List
              </div>
              <div className="text-[14.44px] w-full text-[#28293D] poppins-400">
                Add mobile number and email so that we can connect later.
              </div>
            </div>

            {/* Input Div */}
            <div className="py-[19.24px] pt-[19.24px] pb-[8.2px] flex flex-col items-center gap-[8px]">
              <input
                type="text"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleInputChange}
                className="border-[2.22px] p-[11.1px] w-full sm:w-[307.1px] h-[43.31px] rounded border-[#BDA6FF] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
                placeholder="Mobile Number"
              />

              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="border-[2.22px] p-[11.1px] w-full sm:w-[307.1px] h-[43.31px] rounded border-[#BDA6FF] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
                placeholder="Email"
              />
            </div>

            {/* Button Div */}
            <div className="pt-4 flex flex-col items-center">
              <div
                className="w-full sm:w-[301px] h-[46px] bg-[#BDA6FF] poppins-black flex justify-center items-center border-[1.4px] border-[#000000] custom-shadow-modal-button cursor-pointer"
                onClick={handleButtonClick}
              >
                Submit
              </div>
            </div>
          </>
        ) : (
          <div className="text-center flex flex-col items-center gap-1">
            <div className="flex justify-center mb-1">
              {" "}
              <img src={CheckRight} alt="" />
            </div>
            <div className="text-[24px] w-full text-[#28293D] poppins-700 leading-[43.31px]">
              Thank You!
            </div>
            <div className="text-[14.44px] text-center w-full max-w-[441px] text-[#555770] poppins-400">
             Your response has been collected. Be one of the first to experience Pagaar, join the exclusive WhatsApp group.
            </div>
            <div className="pt-4 flex flex-col items-center">
              <div
                className="w-full mb-2 text-[#28293D] max-w-[301px] sm:w-[301px] h-[52px] bg-[#BDA6FF] poppins-black flex justify-center rounded items-center gap-2 border-[1.4px] border-[#000000] custom-shadow-modal cursor-pointer"
                onClick={handleButtonClick}
              >
              <img src={Whatsapp}/>
                <a href='https://chat.whatsapp.com/HTpZyZQrRUX4jbI3EwFanU' className='flex self-center text-[0.875rem]'>
                Join us on Whatsapp
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowModal;
