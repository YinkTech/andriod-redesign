import React from "react";
import helpArrow from "./../assets/img/mdi_arrow-up.svg";
import image1 from "./../assets/img/Rectangle16.png";
import image2 from "./../assets/img/Rectangle17.png";
import { AiOutlinePlus } from "react-icons/ai";

const ForthAndriod = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-center gap-[20px] text-center">
          <div className="font-[700] text-[48px] w-[70%]">
            The only connected ecosystem with choice.
          </div>
          <button
            className="font-[700] bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
            style={{
              border: "1px solid #202124",
              borderRadius: "24px",
              padding: "12px 28px",
            }}
          >
            Connect to a world of devices
            <img
              src={helpArrow}
              className="w-[24px] h-[24px]"
              alt={helpArrow}
            />
          </button>
        </div>
      </div>

      <div className="container mx-auto my-10 flex gap-[20px] justify-center">
        <div
          className="h-[400px] w-[450px]"
          style={{
            background: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: 'center'
          }}
        >
          <div className=" flex flex-col justify-between h-full p-5 ">
            <div className="flex justify-between ">
              <div></div>
              <div
                className="text-[#202124] bg-white p-1"
                style={{ borderRadius: "50%", border: "2px solid #000" }}
              >
                <AiOutlinePlus />
              </div>
            </div>
            <div className="font-[700] text-[22px] text-white">
              Seamlessly share photos, videos and more with Nearby Share.
            </div>
          </div>
        </div>
        <div
          className="h-[400px] w-[450px]"
          style={{
            background: `url(${image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: 'center'
          }}
        >
          <div className=" flex flex-col justify-between h-full p-5 ">
            <div className="flex justify-between ">
              <div></div>
              <div
                className="text-[#202124] p-1 bg-white"
                style={{ borderRadius: "50%", border: "2px solid #000" }}
              >
                <AiOutlinePlus />
              </div>
            </div>
            <div className="font-[700] text-[22px] text-white">
            Share your phone screen on a big screen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthAndriod;
