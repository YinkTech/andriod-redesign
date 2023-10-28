import React, { useState } from "react";
import helpArrow from "./../assets/img/mdi_arrow-up.svg";
import image1 from "./../assets/img/Rectangle16.png";
import image2 from "./../assets/img/Rectangle17.png";
import popImage1 from "./../assets/img/popImage1.webm";
import popImage2 from "./../assets/img/popImage2.webp";
import PopUp from "./../components/PopUp";
import { AiOutlinePlus } from "react-icons/ai";
import { StayConnected } from "../components/PopLoads";

const ForthAndriod = () => {
  const [firstDisplay, setFirstDisplay] = useState(false);
  const [secondDisplay, setSecondDisplay] = useState(false);
  return (
    <div className="my-10">
      <PopUp trigger={firstDisplay} setTrigger={setFirstDisplay}>
        <StayConnected
          preText="Nearby Share."
          title="Move your content with ease."
          text="Instantly send files, photos, videos, map locations and more to a nearby Android2 or Chromebook3, or a Windows PC4 with  Share it with Android."
          button="none"
          subButton="none"
          subImage={`${popImage1}`}
        />
      </PopUp>

      <PopUp trigger={secondDisplay} setTrigger={setSecondDisplay}>
        <StayConnected
          preText="Cast with Google TV"
          title="Control your TV with your phone or tablet."
          text="Seamlessly browse and cast your favorite shows, videos and movies from your device directly to your Google TV."
          subButton="flex"
          button="none"
          subImage={`${popImage2}`}
        />
      </PopUp>

      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-center gap-[20px] text-center">
          <div className="font-[700] lg:text-[48px] text-[32px] lg:w-[70%]">
            The only connected ecosystem with choice.
          </div>
          <button
            className="font-[700] btn-hover bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
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

      <div className="container mx-auto my-10 flex flex-col lg:flex-row items-center p-4 md:p-10 gap-[30px] justify-center">
        <div
          className="h-[350px] md:h-[400px] lg:w-[450px] w-full"
          style={{
            background: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <div className=" flex flex-col justify-between h-full p-5 ">
            <div className="flex justify-between ">
              <div></div>
              <div
                onClick={() => setFirstDisplay(true)}
                className="text-[#202124] flex items-center justify-center w-[40px] h-[40px] bg-[hsla(0,0%,100%,.6)] p-1 btn-hover-trans "
                style={{ borderRadius: "50%", border: "2px solid #000" }}
              >
                <AiOutlinePlus className="text-[22px]" />
              </div>
            </div>
            <div className="font-[700] text-[22px] text-white">
              Seamlessly share photos, videos and more with Nearby Share.
            </div>
          </div>
        </div>
        <div
          className="h-[350px] md:h-[400px] lg:w-[450px] w-full"
          style={{
            background: `url(${image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <div className=" flex flex-col justify-between h-full p-5 ">
            <div className="flex justify-between ">
              <div></div>
              <div
                onClick={() => setSecondDisplay(true)}
                className="text-[#202124] flex items-center justify-center w-[40px] h-[40px] btn-hover-trans p-1 bg-[hsla(0,0%,100%,.6)]"
                style={{ borderRadius: "50%", border: "2px solid #000" }}
              >
                <AiOutlinePlus className="text-[22px]" />
              </div>
            </div>
            <div className="font-[700] text-[22px] text-[white]">
              Share your phone screen on a big screen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthAndriod;
