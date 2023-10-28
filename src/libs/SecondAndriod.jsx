import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Frame from "./../assets/img/Rectangle10.svg";
import PopUp from "../components/PopUp";
import { StayConnected } from "../components/PopLoads";
import { AiOutlinePlus } from "react-icons/ai";
import AndroidA14 from "./../assets/img/Android-A14-WearOS-Desktop_1.5x.mp4";

const SecondAndriod = () => {
  const [btnPop, setBtnPop] = useState(false);
  return (
    <div className="container mx-auto my-10 lg:w-[1320px]">
      <PopUp trigger={btnPop} setTrigger={setBtnPop}>
        <StayConnected
          preText="Keep conversations going."
          title="WhatsApp for Wear OS"
          text="WhatsApp is now available on Android watches. Securely send and
          receive messages, answer calls and keep up with chats even if
          without your phone."
          button="flex"
          subButton="none"
          subImage={`${AndroidA14}`}
        />
      </PopUp>
      <div className="andriod2 ">
        {" "}
        <div className=" flex w-full py-20 items-center lg:flex-row flex-col md:text-center gap-10 md:justify-between md:p-20 ">
          <div className="p-4 md:p-0 flex flex-col justify-center lg:items-start items-center gap-5 h-[154px] text-white font-[700] text-[30px] lg:text-[64px] lg:gap-[40px]">
            <div className="lg:w-96 text-[32px] text-center w-full ">
              Andriod lets you do you
            </div>
            <button
              className=" btn-hover-trans-white font-[500] text-[16px] flex items-center  md:gap-[8px] h-[48px] "
              style={{
                padding: "12px 28px",
                borderRadius: "24px",
                width: "fit-content",
                backdropFilter: "blur(20px)",
              }}
            >
              Get in on whats's new
              <BsArrowRightShort className="text-3xl" />
            </button>
          </div>
          <div
            className=" m-4 md:w-[438px] bg-white p-0 border-0"
            style={{ borderRadius: "24px" }}
          >
            <div className="p-[16px] md:p-[36px] flex w-full justify-between gap-[20px]">
              <div className="flex flex-col gap-[10px] text-[#202124] items-start">
                <p className="font-[500] text-[16px]">WhatsApp for Wear OS</p>
                <h3
                  className="font-[700] md:text-[32px] text-[24px] text-start"
                  style={{ letterSpacing: "-0.5px", lineHeight: "28px" }}
                >
                  Stay connected, even from your wrist with WhatsApp for Wear
                  OS.
                </h3>
              </div>
              <div>
                <div
                  onClick={() => setBtnPop(true)}
                  className="text-[#202124] flex items-center justify-center w-[30px] h-[30px]  md:w-[40px] md:h-[40px] btn-hover-sec p-1 bg-[hsla(0,0%,100%,.6)]"
                  style={{ borderRadius: "50%", border: "2px solid #000" }}
                >
                  <AiOutlinePlus className="text-[26px] md:text-[32px]" />
                </div>
              </div>
            </div>
            <img src={Frame} className="h-full w-full" alt={Frame} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondAndriod;
