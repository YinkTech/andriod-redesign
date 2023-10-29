import React from "react";
import verizon from "./../assets/img/verizon.webp";
import tmobile from "./../assets/img/tmobile.webp";
import atandt from "./../assets/img/atandt.webp";
import styled from "styled-components";
import { TbArrowUpRight } from "react-icons/tb";
import { BsDownload } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import helpArrow from "./../assets/img/mdi_arrow-up.svg";

const LoadHeading = styled.h3`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.5px;
  line-height: 26px;
`;

const Paragraphy = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  margin-bottom: 24px;
  line-height: 26px;
`;

export const StayConnected = (props) => {
  return (
    <div>
      <div className=" lg:p-9 flex mx-auto flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col items-center w-full h-full justify-center gap-10 ">
          {" "}
          <div>
            <div className="flex lg:w-[450px] md:w-[300px]  w-[300px] justify-center flex-col gap-2">
              <span className="font-[500] text-[16px]">{props.preText}</span>
              <h4 className="text-[#202124] font-[700] lg:text-[48px] text-[28px] ">
                {" "}
                {props.title}{" "}
              </h4>
              <p className="text-[18px] font-[400] ">{props.text}</p>
              <button
                className="btn-hover-sec w-[285px] font-bold text-[16px] flex items-center justify-center gap-[15px] "
                style={{
                  display: `${props.button}`,
                  padding: "5px 20px",
                  borderRadius: "24px",
                  border: "1px solid #000",
                  width: "fit-content",
                }}
              >
                Download now
                <BsDownload className="text-xl" />
              </button>
              <button
                className="btn-hover-sec w-[285px] font-bold text-[16px] flex items-center justify-center gap-[15px] "
                style={{
                  display: `${props.subButton}`,
                  padding: "5px 20px",
                  borderRadius: "24px",
                  border: "1px solid #000",
                  width: "fit-content",
                }}
              >
                Shop devices
                <BsArrowRightShort className="text-2xl" />
              </button>
            </div>
          </div>
          <div>
            <div
              className="flex justify-center lg:w-[450px] md:w-[300px] w-[300px] items-center"
              style={{
                background: `url(${props.subImage})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                borderRadius: "40px",
                flex: "1 1 120px",
                aspectRatio: "1 /1",
              }}
            >
              <video
                style={{ borderRadius: "40px" }}
                autoPlay
                muted
                loop
                className="w-full h-full"
              >
                <source src={`${props.subImage}`} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PassPhone = (props) => {
  return (
    <div>
      <div className="flex lg:px-[102px] flex-col justify-center items-center">
        <div
          className="flex w-full items-center"
          style={{
            borderBottom: "1px solid rgba(95, 99, 104, 0.2)",
            marginBottom: "16px",
            paddingBottom: "28px",
          }}
        >
          <img src={props.setImage} className="w-[80px]" alt={props.setImage} />
          <LoadHeading>{props.setName}</LoadHeading>
        </div>
        <Paragraphy>Buy now</Paragraphy>
        <ul className=" flex flex-col gap-8">
          <li>
            <div
              className="flex w-full items-center justify-center "
              style={{
                borderRadius: "30px",
                border: "1px solid #bcc0c4",
                padding: "12px 24px",
              }}
            >
              <img src={atandt} className="w-full" alt={atandt} />
              <TbArrowUpRight />
            </div>
          </li>
          <li>
            <div
              className="flex w-full items-center justify-center "
              style={{
                borderRadius: "30px",
                border: "1px solid #bcc0c4",
                padding: "12px 24px",
              }}
            >
              <img src={tmobile} className="w-full" alt={atandt} />
              <TbArrowUpRight />
            </div>
          </li>
          <li>
            <div
              className="flex w-full items-center justify-center "
              style={{
                borderRadius: "30px",
                border: "1px solid #bcc0c4",
                padding: "12px 24px",
              }}
            >
              <img src={verizon} className="w-full" alt={verizon} />
              <TbArrowUpRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const NavMobileList = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-around h-full">
        <div>
          <ul className="flex justify-end items-end flex-col gap-5  h-full">
            <li className="flex justify-center items-center transition-all cursor-pointer hover:shadow-2xl rounded-2xl sm:text-[32px] text-[27px] text-[#202124] hover:underline font-[400] py-[17px] px-[6px] gap-3"> Discover Andriod <BsArrowRightShort /></li>
            <li className="flex justify-center items-center transition-all cursor-pointer hover:shadow-2xl rounded-2xl sm:text-[32px] text-[27px] text-[#202124] hover:underline font-[400] py-[17px] px-[6px] gap-3"> Switch &amp; transfer <BsArrowRightShort /></li>
            <li className="flex justify-center items-center transition-all cursor-pointer hover:shadow-2xl rounded-2xl sm:text-[32px] text-[27px] text-[#202124] hover:underline font-[400] py-[17px] px-[6px] gap-3"> Explore devices <BsArrowRightShort /></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="font-[700] btn-hover bg-[#202124] text-white flex items-center gap-[8px] text-[16px]"
            style={{
              border: "1px solid #202124",
              borderRadius: "24px",
              padding: "12px 28px",
            }}
          >
            Shop phones
            <img
              src={helpArrow}
              className="w-[24px] h-[24px]"
              alt={helpArrow}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
