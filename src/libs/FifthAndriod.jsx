import React from "react";
import helpArrow from "./../assets/img/mdi_arrow-up.svg";
import image1 from "./../assets/img/image4.png";

const FifthAndriod = () => {
  return (
    <div
      className="my-10 h-[400px] p-10 "
      style={{ borderRadius: "40px", background: "#e7f5e9" }}
    >
      <div className="container mx-auto flex justify-center gap-[40px] h-full items-center px-[70px]">
        <div className="h-[inherit]">
          <img src={image1} className="h-[inherit] w-full" alt={image1} />
        </div>
        <div className="flex gap-[40px] flex-col ">
          <p className="text-[27px] font-[700] text-start">
            The most anti-phishing and spam <br />
            protections around.
          </p>
          <button
            className="font-[700] bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
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
