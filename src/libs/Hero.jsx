import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import HeroFooter from "./../assets/img/heroFooter.webm";
import MobileBg from "./../assets/img/mobile-bg.webp";

const Hero = () => {
  return (
    <div className="md:container lg:h-[800px] lg:w-[1320px]  mx-auto lg:mb-24">
      <div
        className="md:hidden"
        style={{
          background: `url(${MobileBg})`,
          borderRadius: "0px 0px 32px 32px",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full md:hidden h-[660px] flex items-center gap-1 flex-col justify-center">
          <h1
            className="w-full text-center text-white font-[700] text-[40px] lg:hidden "
            style={{ lineHeight: "76.8px" }}
          >
            Make it yours.
          </h1>
          <span
            className="font-[900] text-[160px] text-[#C4BBE3] "
            style={{ lineHeight: "240px" }}
          >
            14
          </span>
          <button
            className=" btn-hover-trans-white w-[285px] font-[500] text-[16px] flex items-center  md:gap-[8px] "
            style={{
              padding: "12px 28px",
              borderRadius: "24px",
              width: "fit-content",
            }}
          >
            What’s new with Android 14
            <BsArrowRightShort className="text-3xl" />
          </button>
        </div>
      </div>
      <div
        className=""
        style={{
          background: `url(${MobileBg})`,
          borderRadius: "40px",
          backgroundPosition: "center",
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-full w-full bg-[#ffffff1d] flex items-center justify-center lg:justify-between  md:p-12"
          style={{ borderRadius: "inherit", backdropFilter: "blur(3px)" }}
        >
          <div className="p-4 md:p-0 hidden lg:flex flex-col text-white font-[700] text-[64px] gap-[40px]">
            <div className="w-[285px] " style={{ lineHeight: "76.8px" }}>
              Make it yours.
            </div>
            <button
              className=" btn-hover-trans-white w-[285px] font-[500] text-[16px] flex items-center  md:gap-[8px] "
              style={{
                padding: "12px 28px",
                borderRadius: "24px",
                width: "fit-content",
              }}
            >
              What’s new with Android 14
              <BsArrowRightShort className="text-3xl" />
            </button>
          </div>
          <div style={{borderRadius: '40px'}} className="hidden h-[620px] w-[325px] shadow-2xl md:block">
            <div
              style={{
                background: `url(${MobileBg})`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '40px'
              }}
              className="h-full w-full "
            >
              <div className="w-full h-full flex items-center flex-col justify-center">
                <div
                  className="w-full text-center text-white font-[700] text-[34px] lg:hidden "
                  style={{ lineHeight: "76.8px" }}
                >
                  Make it yours.
                </div>
                <span
                  className="font-[900] text-[160px] text-[#C4BBE3] "
                  style={{ lineHeight: "240px" }}
                >
                  14
                </span>
                <button
                  className="lg:hidden btn-hover-trans-white w-[285px] font-[500] text-[16px] flex items-center  md:gap-[8px] "
                  style={{
                    padding: "12px 28px",
                    borderRadius: "24px",
                    width: "fit-content",
                  }}
                >
                  What’s new with Android 14
                  <BsArrowRightShort className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex w-[285px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <video
          style={{ height: "80px", width: "142px" }}
          autoPlay
          muted
          loop
        >
          <source src={HeroFooter} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
