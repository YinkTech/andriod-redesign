import React, { useState } from "react";
import image1 from "./../assets/img/image3.png";
import image2 from "./../assets/img/zflip3.png";
import image3 from "./../assets/img/PixelFold.png";
import image4 from "./../assets/img/pixel.png";
import helpArrow from "./../assets/img/mdi_arrow-up.svg";
import { AiOutlinePlus } from "react-icons/ai";
import PopUp from "../components/PopUp";
import PixelFold from "./../assets/img/PixelFold.png";
import Flip from "./../assets/img/Flip.webp";
import Fold from "./../assets/img/fold.webp";
import { PassPhone } from "../components/PopLoads";


const ThirdAndriod = () => {
  const [pexelPop, setPexelPop] = useState(false);
  const [foldPop, setFoldPop] = useState(false);
  const [pixelFoldPop, setpixelFoldPop] = useState(false);

  return (
    <div className="container mx-auto my-16">
      <PopUp trigger={pexelPop} setTrigger={setPexelPop}>
        <PassPhone setName={'Galaxy Z Flip5'} setImage={Flip} />
      </PopUp>

      <PopUp trigger={foldPop} setTrigger={setFoldPop}>
        <PassPhone setName={'Galaxy Z Fold5'} setImage={Fold} />
      </PopUp>

      <PopUp trigger={pixelFoldPop} setTrigger={setpixelFoldPop}>
        <PassPhone setName={'Pixel Fold'} setImage={PixelFold} />
      </PopUp>


      <div className="p-6">
        <h3 className="text-3xl font-[700] text-center">
          Do you want to flip or fold?
        </h3>

        <div className="my-10 flex flex-col gap-[40px] ">
          <div className=" flex flex-col md:flex-row justify-center gap-[20px] items-center">
            <div
              className="text-[#202124] bg-[#e7f5e9] h-[400px]  md:w-[438px] flex flex-col gap-[20px] items-center justify-center"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={image1}
                className=" h-[203.64px] w-[362.8px]"
                alt={image1}
              />
              <div className="flex flex-col items-center justify-center gap-[20px] ">
                <div className="flex flex-col items-center justify-center gap-[8px] ">
                  <h4 className="font-[700] text-[24px] text-[#202124]">
                    Galaxy Z Flip5
                  </h4>
                  <p>From $999.00</p>
                </div>

                <button
                onClick={() => setPexelPop(true)}
                className="font-[700] flex items-center gap-[4px] btn-hover-transparent text-[16px]">
                  Shop now
                  <AiOutlinePlus className="text-[22px]" />
                </button>
              </div>
            </div>
            <div
              className="text-[#202124] bg-[#d9e0f0] h-[400px]  md:w-[438px] flex flex-col gap-[20px] items-center justify-center"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={image2}
                className=" h-[203.64px] w-[362.8px]"
                alt={image1}
              />
              <div className="flex flex-col items-center justify-center gap-[20px] ">
                <div className="flex flex-col items-center justify-center gap-[8px] ">
                  <h4 className="font-[700] text-[24px] text-[#202124]">
                  Galaxy Z Fold5
                  </h4>
                  <p>From $1,799.00</p>
                </div>

                <button
                  onClick={() => setFoldPop(true)}
                  className="font-[700] btn-hover-transparent flex items-center gap-[4px] text-[16px]"
                  style={{
                    border: "1px solid #202124",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Shop now
                  <AiOutlinePlus className="text-[22px]" />
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-center gap-[20px] items-center">
            <div
              className="text-[#202124] bg-[#fdf6e6] h-[400px]  md:w-[438px] flex flex-col gap-[20px] items-center justify-center"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={image3}
                className=" h-[203.64px] w-[362.8px]"
                alt={image1}
              />
              <div className="flex flex-col items-center justify-center gap-[20px] ">
                <div className="flex flex-col items-center justify-center gap-[8px] ">
                  <h4 className="font-[700] text-[24px] text-[#202124]">
                    Pixel Fold
                  </h4>
                  <p>From $999.00</p>
                </div>

                <button
                  onClick={() => setpixelFoldPop(true)}
                  className="font-[700] btn-hover-transparent flex items-center gap-[4px] text-[16px]"
                  style={{
                    border: "1px solid #202124",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Shop now
                  <AiOutlinePlus className="text-[22px]" />
                </button>
              </div>
            </div>
            <div
              className="text-[#202124] bg-[#e7d8d9] p-4 md:p-0 md:h-[400px]  md:w-[438px] flex flex-col gap-[20px] items-center justify-center"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={image4}
                className=" md:h-[180.64px] md:w-[302.8px]"
                alt={image1}
              />
              <div className="flex flex-col items-center justify-center gap-[25px] ">
                <div className="flex flex-col items-center justify-center gap-[8px] ">
                  <h4 className="font-[700] text-[24px] text-[#202124]">
                    Your perfect phone
                  </h4>
                </div>

                <button
                  className="font-[700] btn-hover bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
                  style={{
                    border: "1px solid #202124",
                    borderRadius: "24px",
                    padding: "12px 28px",
                  }}
                >
                  Help me choose
                  <img
                    src={helpArrow}
                    className="w-[24px] h-[24px]"
                    alt={helpArrow}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdAndriod;
