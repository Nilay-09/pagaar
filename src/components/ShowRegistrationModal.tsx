import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ShowRegistrationModal({ closeModalRegByClick }) {
  const [isOtpDialogeVisible, setIsOtpDialogeVisible] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(true); 
  const navigate = useNavigate();// New state to track OTP validity

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = '';
    };
  }, []);

  useEffect(() => {
    if (isOtpDialogeVisible) {
      const firstInput = document.getElementById('otp-0');
      if (firstInput) {
        firstInput.focus();
      }
    }
  }, [isOtpDialogeVisible]);

  useEffect(() => {
    // Check if all OTP fields are filled
    setIsOtpComplete(otp.every(value => value !== ""));
  }, [otp]);

  const handleGetOtpClick = () => {
    setIsOtpDialogeVisible(true);
  };

  const handleOtpChange = (element, index) => {
    const value = element.value;
    if (!/^[0-9]$/.test(value) && value !== "") return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0 && !otp[index]) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const handleFocusBlur = (e, index) => {
    if (otp[index]) {
      e.target.classList.add('border-[#BDA6FF]');
    } else {
      e.target.classList.remove('border-[#BDA6FF]');
    }
  };

  const handleVerifyClick = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '2222') {
      // Perform verification logic here if OTP is correct
      console.log('OTP is correct');
      setIsOtpValid(true);
      navigate('/registration');
    } else {
      // Set OTP validity to false to apply red border
      setIsOtpValid(false);
    }
  };

  return (
    <div>
      <div 
        className="modal-wrapper bg-[#00000033] fixed top-0 left-0 right-0 bottom-0"
        onClick={() => closeModalRegByClick()}
      ></div>

      <div className="z-20 fixed w-[544px] bg-white py-[36px] px-[32px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#000000] border-[1px] rounded-[8px]">
        {!isOtpDialogeVisible ? (
          <>
            <div className="flex flex-col gap-2 w-full justify-center px-[19px] py-2">
              <div className="poppins-600 text-[28.87px] leading-[43.41px] text-[#28293D] text-center">
                Register Your Mobile Number
              </div>
              <div className="poppins-400 text-[14px] text-[#555770] text-center">
                We will share a one-time password on your mobile number
              </div>
            </div>
            <div className="py-[19.24px] pt-[19.24px] pb-[8.2px] flex flex-col items-center gap-[8px]">
              <input 
                type="text"
                className="border-[2.22px] p-[11.1px] w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-400"
                placeholder="+91"
              />
            </div>
            <div className="mt-[41px] pt-[12.83px] w-full pb-[36px] flex justify-center">
              <div 
                className="w-[300px] h-[50px] bg-[#BDA6FF] flex justify-center items-center poppins-700 border-[2px] border-[#000000] custom-shadow-modal-button cursor-pointer"
                onClick={handleGetOtpClick}
              >
                Get OTP
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2 w-full justify-center px-[19px] py-2">
              <div className="poppins-600 text-[28.87px] leading-[43.41px] text-[#28293D] text-center">
                Enter OTP
              </div>
              <div className="poppins-400 text-[14px] text-[#555770] text-center">
                Please enter the OTP sent to your mobile number
              </div>
            </div>
            <div className="pt-2 pb-6 flex justify-center gap-4 ">
              {otp.map((data, i) => (
                <input 
                  type="text" 
                  className={`w-[54px] h-[50px] rounded-[13.21px] border-[2.56px] custom-shadow-modal-otp text-center text-[24px] poppins-400 ${otp[i] ? 'border-[#BDA6FF]' : 'border-black'} ${!isOtpValid ? 'border-[#FFBEBE]' : ''}`}
                  maxLength={1}
                  key={i}
                  value={otp[i]}
                  onChange={e => handleOtpChange(e.target, i)}
                  id={`otp-${i}`}
                  onFocus={(e) => handleFocusBlur(e, i)}
                  onBlur={(e) => handleFocusBlur(e, i)}
                  onKeyDown={e => handleKeyDown(e, i)}
                  onKeyPress={handleKeyPress}
                />
              ))}
            </div>
            <div className="text-[#555770] poppins-500">Resend OTP In <span className='text-[#3C95E9] poppins-600'>30s</span></div>
            <div className="mt-[12px] pt-[12.83px] w-full pb-[36px] flex justify-center">
              <div 
                className={`w-[300px] h-[50px] flex justify-center items-center poppins-700 border-[2px] border-[#000000] custom-shadow-modal-otp rounded-[13px] ${isOtpComplete ? "cursor-pointer bg-[#BDA6FF]" : "cursor-not-allowed bg-[#BABABA]"}`}
                onClick={isOtpComplete ? handleVerifyClick : () => {}} // Use a no-op function when OTP is not complete
              >
                Verify
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShowRegistrationModal;
