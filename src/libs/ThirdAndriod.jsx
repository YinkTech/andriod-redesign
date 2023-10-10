import React from "react";
import image1 from "./../assets/img/image3.png";
import image2 from "./../assets/img/zflip3.png";
import image3 from "./../assets/img/PixelFold.png";
import image4 from "./../assets/img/pixel.png";
import helpArrow from "./../assets/img/mdi_arrow-up.svg";
import { AiOutlinePlus } from "react-icons/ai";

const ThirdAndriod = () => {
  return (
    <div className="container mx-auto my-16">
      <div>
        <h3 className="text-3xl font-[700] text-center">
          Do you want to flip or fold?
        </h3>

        <div className="my-10 flex flex-col gap-[40px] ">
          <div className=" flex justify-center gap-[20px] items-center">
            <div
              className="text-[#202124] bg-[#e7f5e9] h-[400px]  w-[438px] flex flex-col gap-[20px] items-center justify-center"
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
                  className="font-[700] flex items-center gap-[4px] text-[16px]"
                  style={{
                    border: "1px solid #202124",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Shop now
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div
              className="text-[#202124] bg-[#d9e0f0] h-[400px]  w-[438px] flex flex-col gap-[20px] items-center justify-center"
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
                    Galaxy Z Flip5
                  </h4>
                  <p>From $1,799.00</p>
                </div>

                <button
                  className="font-[700] flex items-center gap-[4px] text-[16px]"
                  style={{
                    border: "1px solid #202124",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Shop now
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
          <div className=" flex justify-center gap-[20px] items-center">
            <div
              className="text-[#202124] bg-[#fdf6e6] h-[400px]  w-[438px] flex flex-col gap-[20px] items-center justify-center"
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
                  className="font-[700] flex items-center gap-[4px] text-[16px]"
                  style={{
                    border: "1px solid #202124",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Shop now
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div
              className="text-[#202124] bg-[#e7d8d9] h-[400px]  w-[438px] flex flex-col gap-[20px] items-center justify-center"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={image4}
                className=" h-[180.64px] w-[302.8px]"
                alt={image1}
              />
              <div className="flex flex-col items-center justify-center gap-[25px] ">
                <div className="flex flex-col items-center justify-center gap-[8px] ">
                  <h4 className="font-[700] text-[24px] text-[#202124]">
                    Your perfect phone
                  </h4>
                </div>

                <button
                  className="font-[700] bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
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
