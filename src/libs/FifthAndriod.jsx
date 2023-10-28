import React from "react";
import helpArrow from "./../assets/img/mdi_arrow-up.svg";
import myVideo from "./../assets/img/Android-HP-Security-mobile-v3.webm";

const FifthAndriod = () => {
  return (
    <div
      className="my-20 md:h-[800px] md:p-10  py-10 p-4 "
      style={{ borderRadius: "40px", background: "#e7f5e9" }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-col lg:flex-row justify-center gap-[40px] h-full items-center md:px-[30px]">
        <div className="lg:h-[inherit] flex justify-center items-center">
          <video className="lg:h-[inherit] md:w-[80%] lg:w-full" autoPlay muted loop>
            <source src={myVideo} type="video/webm" />
            Your browser does not support the video
          </video>
        </div>
        <div className="flex gap-[40px] justify-center items-center lg:justify-normal lg:items-start flex-col ">
          <h3 className="lg:text-[32px] text-[24px] font-[700] text-center lg:text-start">
            The most anti-phishing and spam protections around. 
          </h3>
          <button
            className="font-[700] btn-hover bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
            style={{
              border: "1px solid #202124",
              borderRadius: "24px",
              width: "fit-content",
              padding: "12px 28px",
            }}
          >
            Explore security features
            <img
              src={helpArrow}
              className="w-[15.84px] h-[15.84px]"
              alt={helpArrow}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifthAndriod;
