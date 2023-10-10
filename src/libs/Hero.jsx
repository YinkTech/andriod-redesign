import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import HeroBg from "./../assets/img/hero.png";
import HeroBgSub from "./../assets/img/Rectangle4.png";
import HeroFooter from "./../assets/img/heroFooter.png";

const Hero = () => {
  return (
    <div className="container  mx-auto mb-10">
      <div
        className=" h-[500px]"
        style={{
          background: `url(${HeroBg})`,
          borderRadius: "40px",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-full w-full bg-[#ffffff1d] flex items-center justify-between  p-12"
          style={{ borderRadius: "inherit" }}
        >
          <div className="p-4 md:p-0 flex flex-col text-white font-[700] text-[64px] gap-[40px]">
            <div className="w-[285px]" style={{ lineHeight: "76.8px" }}>
              Make it yours.
            </div>
            <button
              className=" text-[#202124] w-[285px] font-[500] text-[16px] flex items-center  md:gap-[8px] "
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                padding: "12px 28px",
                borderRadius: "24px",
                width: "fit-content",
              }}
            >
              What’s new with Android 14
              <BsArrowRightShort className="text-3xl" />
            </button>
          </div>
          <div className="h-full">
            <img
              src={HeroBgSub}
              className="h-full w-full shadow-2xl"
              alt={HeroBgSub}
            />
          </div>
          <div className="w-[285px]"></div>
        </div>
      </div>
      <div className="flex justify-center">
<img src={HeroFooter} style={{transform: 'rotate(180deg)'}} className=" translate-x-7" alt={HeroFooter} />
      </div>
    </div>
  );
};

export default Hero;
