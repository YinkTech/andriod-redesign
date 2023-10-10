import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Frame from "./../assets/img/Frame14.png";

const SecondAndriod = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="andriod2 flex items-center justify-around p-20 gap-2">
        <div className="p-4 md:p-0 flex flex-col text-white font-[700] text-[64px] gap-2">
          <div className="  md:w-96">Andriod lets you do you</div>
          <button
            className=" text-[#202124] font-[500] text-[16px] flex items-center  md:gap-[8px] "
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              padding: "12px 28px",
              borderRadius: "24px",
              width: "fit-content",
            }}
          >
            Get in on whats's new
            <BsArrowRightShort className="text-3xl" />
          </button>
        </div>
        <div>
          <img src={Frame} className="h-[400px]" alt={Frame} />
        </div>
      </div>
    </div>
  );
};

export default SecondAndriod;
